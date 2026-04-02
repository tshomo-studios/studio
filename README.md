# Tshomo Studios

Afrofuturistic game & animation studio based in Johannesburg, South Africa. This is the marketing site — a fully static [Astro](https://astro.build) site with React islands, Tailwind CSS, and Framer Motion animations, deployed via GitHub Pages.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | [Astro 5](https://astro.build) (static output) |
| UI | React 18 + [shadcn/ui](https://ui.shadcn.com) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Styling | Tailwind CSS + custom design tokens |
| Package manager | pnpm |

## Getting Started

**Prerequisites:** Node 20+, pnpm

```bash
pnpm install
pnpm dev        # http://localhost:8080
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server at `localhost:8080` |
| `pnpm build` | Build static site to `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run tests (vitest) |

## Deployment — GitHub Pages

The site deploys automatically via GitHub Actions on every push to `main`.

### First-time setup

1. Update `site` in `astro.config.mjs`:
   ```js
   site: "https://yourusername.github.io",
   ```
2. In your GitHub repo go to **Settings → Pages → Source** and select **GitHub Actions**
3. Push to `main` — the workflow handles the rest

### Manual deploy

```bash
pnpm build   # outputs to dist/
```

Then upload the `dist/` folder to any static host (Netlify, Cloudflare Pages, etc.).

## Self-hosting with Docker

A multi-stage Dockerfile is included for serving the site with nginx:

```bash
docker build -t tshomo-studio .
docker run -p 8080:80 tshomo-studio
```

## Project Structure

```
src/
├── assets/               # Images (bundled with hashed filenames)
├── components/
│   ├── ui/               # shadcn/ui primitives
│   ├── ReactApp.tsx      # Root React island (providers + all sections)
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── MissionSection.tsx
│   ├── ReachSection.tsx
│   ├── ContactSection.tsx
│   └── FooterSection.tsx
├── layouts/
│   └── Layout.astro      # HTML shell (meta, fonts, CSS)
├── pages/
│   ├── index.astro       # Landing page
│   └── 404.astro         # Not found page
├── hooks/                # Custom React hooks
├── lib/
│   └── utils.ts          # cn() helper
└── index.css             # Global styles & design tokens
```
