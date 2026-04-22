# AtlasWealth

**Atlas Wealth OS** is a marketing and product-education site for a conceptual *family-office-style* operating system: one place to think about global assets, entities, jurisdictions, and reporting—with a calm, premium presentation aimed at high-net-worth audiences and their advisors.

The **Next.js application** lives in [`atlas-main/`](atlas-main/). It is a multi-page experience (home, problem/solution narrative, features, architecture, security, showcase, about, contact, legal) plus lead paths such as **Request early access**, **Login**, and an **Institutional portal** placeholder.

> **Disclaimer:** Copy and demos on the site are illustrative. Nothing here is financial, legal, or tax advice.

---

## What’s in the app

- **Landing & story pages** — Hero, problem/solution framing, trust and security positioning, and static UI mockups (dashboard-style previews) built with React components.
- **AI Wealth Insight preview** — A small demo powered by **Google Genkit** and **Gemini** (`googleai/gemini-2.5-flash`) that returns short, *non-advisory* informational snippets for a user-entered concept (see [`atlas-main/src/ai/flows/generate-wealth-insight.ts`](atlas-main/src/ai/flows/generate-wealth-insight.ts)).
- **Forms & CTAs** — Early-access interest, contact, and login UI (front-end flows; wire your own backend as needed).
- **Design system** — Tailwind CSS, shared layout (`Navigation`, `Footer`), and **shadcn/ui**-style primitives under [`atlas-main/src/components/ui/`](atlas-main/src/components/ui/).

Product intent is summarized in [`atlas-main/docs/blueprint.md`](atlas-main/docs/blueprint.md) (original design brief).

---

## Tech stack

| Area | Choice |
|------|--------|
| Framework | [Next.js](https://nextjs.org/) 15 (App Router) |
| UI | React 19, Tailwind CSS 3, Radix UI primitives, `lucide-react` |
| AI | [Genkit](https://firebase.google.com/docs/genkit) + `@genkit-ai/google-genai` |
| Validation / forms | Zod, React Hook Form (where used) |
| Charts / misc | Recharts (available in dependencies) |

---

## Getting started

**Requirements:** Node.js 20+ recommended.

```bash
cd atlas-main
npm install
npm run dev
```

The dev server uses **port 9002** (see [`atlas-main/package.json`](atlas-main/package.json): `next dev --turbopack -p 9002`). Open [http://localhost:9002](http://localhost:9002).

| Script | Purpose |
|--------|---------|
| `npm run build` | Production build |
| `npm run start` | Run production server (after `build`) |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run genkit:dev` | Genkit developer UI / flows (see Genkit docs) |

---

## AI / Genkit configuration

Wealth insight generation uses **Google AI** through Genkit. To run flows locally you typically need a Google AI Studio / Vertex-compatible API key and environment variables as described in the [Genkit JS getting started](https://firebase.google.com/docs/genkit/js/get-started) and `@genkit-ai/google-genai` plugin docs.

The model id is set in [`atlas-main/src/ai/genkit.ts`](atlas-main/src/ai/genkit.ts) (`googleai/gemini-2.5-flash`).

---

## Project layout (high level)

```
atlas-main/
├── src/
│   ├── app/              # App Router pages & layout
│   ├── components/       # Marketing sections + ui/
│   ├── ai/               # Genkit config, dev entry, flows
│   ├── hooks/
│   └── lib/
├── docs/
│   └── blueprint.md      # Product/design brief
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Deployment notes

- **Firebase / App Hosting:** [`atlas-main/apphosting.yaml`](atlas-main/apphosting.yaml) is present for Firebase-oriented hosting workflows; align with your own CI/CD and environment secrets.
- **Environment:** Keep API keys and secrets out of the repo; use your host’s env configuration for Genkit and any future auth backends.

---

## License

Private / all rights reserved unless you add an explicit `LICENSE` file.
