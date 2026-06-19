import { useEffect, useRef, useState } from 'react';

const API_URL = import.meta.env.VITE_CHAT_API_URL;

const SUGGESTED = [
  'What has Ethan built with machine learning?',
  'Tell me about his full-stack experience.',
  'What languages and tools does he know?',
  'What did he do at the AIBIDS program?',
];

const GREETING =
  "Hi — I'm Ethan's portfolio assistant. Ask me anything about his projects, experience, or skills.";

function PortfolioChat() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, streaming]);

  async function send(text) {
    const question = text.trim();
    if (!question || streaming) return;
    setError(null);

    if (!API_URL) {
      setError('Chat endpoint not configured (set VITE_CHAT_API_URL).');
      return;
    }

    // History sent to the model excludes the local greeting bubble.
    const history = messages.filter((m, i) => !(i === 0 && m.role === 'assistant'));
    const outgoing = [...history, { role: 'user', content: question }];

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: question },
      { role: 'assistant', content: '' },
    ]);
    setInput('');
    setStreaming(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: outgoing }),
      });

      if (!res.ok || !res.body) {
        throw new Error(`Request failed (${res.status})`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      // Parse the Anthropic SSE stream, appending text deltas to the last bubble.
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) continue;
          const data = trimmed.slice(5).trim();
          if (!data || data === '[DONE]') continue;

          let event;
          try {
            event = JSON.parse(data);
          } catch {
            continue;
          }

          if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
            const chunk = event.delta.text;
            setMessages((prev) => {
              const next = [...prev];
              next[next.length - 1] = {
                role: 'assistant',
                content: next[next.length - 1].content + chunk,
              };
              return next;
            });
          } else if (event.type === 'error') {
            throw new Error(event.error?.message || 'Stream error');
          }
        }
      }
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      setMessages((prev) => {
        const next = [...prev];
        // Drop the empty assistant placeholder on failure.
        if (next[next.length - 1].role === 'assistant' && !next[next.length - 1].content) {
          next.pop();
        }
        return next;
      });
    } finally {
      setStreaming(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <section id="ask" aria-label="Ask the portfolio assistant">
      <div className="section-header reveal">
        <span className="section-num">//</span>
        <h2 className="section-title">Ask Anything</h2>
        <div className="section-line"></div>
      </div>

      <div className="chat-shell reveal">
        <div className="chat-rail" aria-hidden="true">
          <span className="chat-dot" />
          <span className="chat-rail-label">AI · trained on this portfolio</span>
        </div>

        <div className="chat-log" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg-${m.role}`}>
              <span className="chat-msg-tag">{m.role === 'user' ? 'You' : 'Assistant'}</span>
              <div className="chat-bubble">
                {m.content || (streaming && i === messages.length - 1 ? (
                  <span className="chat-typing"><i /><i /><i /></span>
                ) : null)}
              </div>
            </div>
          ))}
          {error && <div className="chat-error">{error}</div>}
        </div>

        {messages.length <= 1 && (
          <div className="chat-suggestions">
            {SUGGESTED.map((q) => (
              <button
                key={q}
                type="button"
                className="chat-chip"
                onClick={() => send(q)}
                disabled={streaming}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <form className="chat-input-row" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Ethan's work, skills, or experience…"
            aria-label="Your question"
            disabled={streaming}
          />
          <button type="submit" className="chat-send" disabled={streaming || !input.trim()}>
            {streaming ? '…' : 'Ask →'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PortfolioChat;
