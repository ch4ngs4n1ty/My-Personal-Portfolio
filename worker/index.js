// Cloudflare Worker — "Ask Ethan's Portfolio" chat backend.
//
// Holds the Anthropic API key server-side (never exposed to the browser),
// builds a system prompt from the real portfolio data, and streams Claude's
// reply back to the chat widget.
//
// The whole portfolio corpus is small enough to live in the context window,
// so there is no vector database here — every fact is always present, which
// is both simpler and more accurate than retrieval at this scale.

import projectsData from '../src/data/projects.json';
import experiencesData from '../src/data/experiences.json';
import toolsData from '../src/data/tools.json';

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const MAX_MESSAGES = 24; // cap conversation length to bound cost / abuse
const MAX_CHARS = 2000; // cap per-message length

function buildPortfolioContext() {
  const projects = projectsData
    .map((p, i) => {
      const tools = (p.tools || []).filter(Boolean).join(', ');
      return [
        `PROJECT ${i + 1}: ${p.title}`,
        `  Timeframe: ${p.duration}${p.program ? ` — ${p.program}` : ''}`,
        `  Core tech: ${p.tech.join(', ')}`,
        tools && `  Tools used: ${tools}`,
        `  Repository: ${p.githubUrl || 'private / not publicly linked'}`,
        `  Summary: ${p.description}`,
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n\n');

  const experiences = experiencesData
    .map((e, i) => {
      return [
        `EXPERIENCE ${i + 1}: ${e.title} @ ${e.company}`,
        `  When: ${e.duration}`,
        e.location && `  Where: ${e.location}`,
        e.skills && `  Skills: ${e.skills.join(', ')}`,
        `  Summary: ${e.summary}`,
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n\n');

  const tools = toolsData.map((t) => t.name).join(', ');

  return `## EXPERIENCE\n\n${experiences}\n\n## PROJECTS\n\n${projects}\n\n## TOOLS & TECHNOLOGIES\n\n${tools}`;
}

function buildSystemPrompt() {
  return `You are the assistant embedded in Ethan Chang's personal portfolio website. Visitors (recruiters, collaborators, the curious) ask you questions about Ethan, and you answer from the portfolio data below.

Rules:
- Answer ONLY from the information provided. Do not invent roles, dates, employers, or technologies that are not listed.
- If something is not covered (salary, availability, personal details, anything outside this data), say you don't have that information and suggest reaching out via the Contact section.
- Be concise and conversational — usually 1-3 sentences. This is a chat widget, not an essay. Respond with the final answer only; do not narrate your reasoning.
- Speak about Ethan in the third person ("Ethan built…", "He worked on…").
- When relevant, point visitors to the matching section of the site (Projects, Experience, Tools, Contact).
- Stay friendly and professional. You represent Ethan.

=== PORTFOLIO DATA ===

${buildPortfolioContext()}

=== END PORTFOLIO DATA ===`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

// ALLOWED_ORIGIN may be "*", or a comma-separated list of exact origins.
// We echo back the request's origin only if it's on the list, so the live
// site and localhost can both be allowed at once.
function resolveOrigin(request, env) {
  const allowed = (env.ALLOWED_ORIGIN || '*')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (allowed.includes('*')) return '*';
  const reqOrigin = request.headers.get('Origin');
  if (reqOrigin && allowed.includes(reqOrigin)) return reqOrigin;
  return allowed[0] || '*';
}

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

export default {
  async fetch(request, env) {
    const origin = resolveOrigin(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, origin);
    }
    if (!env.ANTHROPIC_API_KEY) {
      return json({ error: 'Server not configured: missing ANTHROPIC_API_KEY' }, 500, origin);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: 'Invalid JSON body' }, 400, origin);
    }

    const messages = Array.isArray(payload?.messages) ? payload.messages : null;
    if (!messages || messages.length === 0) {
      return json({ error: 'Body must include a non-empty "messages" array' }, 400, origin);
    }

    // Validate + sanitize the conversation before forwarding to Claude.
    const clean = messages
      .slice(-MAX_MESSAGES)
      .filter(
        (m) =>
          m &&
          (m.role === 'user' || m.role === 'assistant') &&
          typeof m.content === 'string' &&
          m.content.trim()
      )
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

    if (clean.length === 0 || clean[clean.length - 1].role !== 'user') {
      return json({ error: 'Last message must be from the user' }, 400, origin);
    }

    const anthropicRes = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: env.CLAUDE_MODEL || 'claude-opus-4-8',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: clean,
        stream: true,
      }),
    });

    if (!anthropicRes.ok) {
      const detail = await anthropicRes.text();
      return json({ error: 'Upstream error', detail }, anthropicRes.status, origin);
    }

    // Pipe Claude's SSE stream straight through to the browser.
    return new Response(anthropicRes.body, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        ...corsHeaders(origin),
      },
    });
  },
};
