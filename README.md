# Personal Portfolio — Ethan Chang

A fast, single-page developer portfolio built with React and Vite, featuring an
animated Three.js background and an AI chat widget that answers questions about
my work in real time.

**🌐 Live site:** https://ch4ngs4n1ty.github.io/My-Personal-Portfolio/

---

## Tech Stack

| Layer    | Technology                                               |
| -------- | -------------------------------------------------------- |
| Frontend | React 19, Vite 7                                         |
| Graphics | Three.js (animated constellation / starfield background) |
| Content  | JSON-driven data (projects, experiences, tools)          |
| AI chat  | Cloudflare Worker → Anthropic Claude API                 |
| Hosting  | GitHub Pages (site) + Cloudflare Workers (chat backend)  |

## How It's Built

- **Component-driven UI.** Sections (About, Experience, Projects, Tools) are
  reusable React components rendered from JSON, so content updates never touch
  markup — edit the data files in [`src/data/`](src/data/) and the cards
  regenerate.
- **Custom visuals.** A Three.js canvas renders an animated constellation
  background, alongside a custom cursor, intro overlay, and image modals.
- **"Ask Ethan" chatbot.** A Cloudflare Worker holds the Claude API key
  server-side, builds a system prompt from the real portfolio data, and streams
  answers back to the widget — no key ever reaches the browser.

## Running Locally

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:5173
npm run dev:all    # run the site + chat worker together
```

## Building & Deploying

```bash
npm run build      # production build → dist/
npm run deploy     # build and publish to GitHub Pages
npm run deploy:all # deploy site + Cloudflare chat worker
```

## Project Structure

```
src/
├── components/   # React UI components
├── data/         # projects.json, experiences.json, tools.json
├── App.jsx       # root component
└── main.jsx      # entry point
worker/           # Cloudflare Worker for the AI chat backend
```

> More detail on updating content and deployment lives in
> [DEPLOY-GUIDE.md](DEPLOY-GUIDE.md) and [HOW-TO-UPDATE.md](HOW-TO-UPDATE.md).
