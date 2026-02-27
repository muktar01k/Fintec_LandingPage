# Landing Page (React + TypeScript + Tailwind)

## Tailwind setup (no `init -p` needed)

This project uses **Tailwind CSS v4** with the **Vite plugin**. There is no `tailwindcss init -p` step:

- **Tailwind v4** does not ship an `init` CLI. Use the official Vite integration instead.
- Configuration is in `vite.config.ts` via `@tailwindcss/vite`.
- Styles are in `src/index.css` with `@import "tailwindcss";`.

If you previously ran `npx tailwindcss init -p` and it failed, that’s expected: use the current setup and run `npm run dev` or `npm run build`.

## Run the app

```bash
npm install
npm run dev
```

## Images

Put your assets in `public/image/` (e.g. `Logo.png`, `img-*.jpg`, `logo-*.png`, `Vector *.png`, etc.) so routes like `/image/Logo.png` work.

## Structure

- **`src/components/`** – `Navbar.tsx`, `Footer.tsx`
- **`src/pages/LandingHomepage/`** – All landing sections (Banner, About, StatGrid, WhoWeAre, WhatWeOffer, Features, WhyChooseUs, Testimonials, HowItWorks, Team, Faqs, CTA, Partners, NewsInsight)
- **`src/App.tsx`** – Renders Navbar, LandingHomepage, Footer
