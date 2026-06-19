# Portfolio Chat — Cloudflare Worker

The backend for the "Ask Anything" chat on the portfolio. It holds the Anthropic
API key (never exposed to the browser), builds a system prompt from the real
portfolio data in `src/data/*.json`, and streams Claude's reply back to the widget.

There is **no vector database**: the entire portfolio corpus fits comfortably in
the model's context window, so every fact is always present — simpler and more
accurate than retrieval at this scale.

## One-time setup

```bash
cd worker
npm install            # installs wrangler (see package.json)
npx wrangler login     # authenticate with your Cloudflare account
```

## Add your Anthropic key (encrypted, never committed)

```bash
npx wrangler secret put ANTHROPIC_API_KEY
# paste your key from https://console.anthropic.com when prompted
```

## Run locally

```bash
npx wrangler dev
# serves at http://localhost:8787
```

Point the frontend at it by creating `.env.local` in the project root:

```
VITE_CHAT_API_URL=http://localhost:8787
```

## Deploy

```bash
npx wrangler deploy
```

Wrangler prints your Worker URL (e.g. `https://portfolio-chat.<subdomain>.workers.dev`).
Put that in the project root `.env` so the production build uses it:

```
VITE_CHAT_API_URL=https://portfolio-chat.<subdomain>.workers.dev
```

Then rebuild/redeploy the site (`npm run deploy`).

## Lock it down before going public

In `wrangler.toml`, set `ALLOWED_ORIGIN` to your live site so only it can call the
Worker:

```toml
[vars]
ALLOWED_ORIGIN = "https://ch4ngs4n1ty.github.io"
```

## Switch model / cost

`CLAUDE_MODEL` in `wrangler.toml` controls the model. It defaults to
`claude-opus-4-8` (most capable). For a cheaper, faster Q&A bot, set it to
`claude-haiku-4-5`.
