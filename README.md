# LURCH — Marketing Website

The public-facing marketing site for **LURCH** ("Finally, love optimised.").

This is **not** the app. It lives in the same repository, in its own folder:

| Folder      | What it is                        | Stack                  |
|-------------|-----------------------------------|------------------------|
| `/` (root)  | The LURCH **app** (product UI)    | Next.js                |
| `/website`  | The LURCH **marketing site**      | Next.js (this folder)  |

## Run it

```bash
cd website
npm install
npm run dev     # http://localhost:3000
```

Run the app and the website on different ports if you need both at once
(`npm run dev -- -p 3001`).

## Deploying

Deployed on Vercel as a separate project from the app. In the Vercel project
settings, set **Root Directory** to `website`.

## What's in here

- `app/` — routes, layout and the single-page marketing site
- `public/` — static assets
- `*.md` — briefs, research and specs that drive the copy and design
  (`lurch-project-brief.md`, `lurch-research.md`, `lurch-redesign.md`,
  `lurch-profiles-final.md`, `component-spec.md`)
- `bijouri_brand_identity.html`, `bijouri *.svg|png` — Bijouri brand identity
  exploration and marks
