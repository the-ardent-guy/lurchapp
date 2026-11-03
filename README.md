# LURCH

Two projects, one repo.

| Folder     | What it is                                      | Dev server                      |
|------------|-------------------------------------------------|---------------------------------|
| `/` (root) | **The app** — the LURCH product UI (Next.js)     | `npm install && npm run dev`    |
| `/website` | **The marketing website** (Next.js, own deploy)  | `cd website && npm install && npm run dev -- -p 3001` |

The two are independent Next.js projects with their own `package.json`,
dependencies and Vercel deploy. Nothing is shared between them, so a change in
one cannot break the other.

- App design notes: [`DESIGN.md`](DESIGN.md)
- Website docs: [`website/README.md`](website/README.md)

## Deploys

Both deploy from this repo as separate Vercel projects. The website project
must have its **Root Directory** set to `website`; the app project uses the
repository root.
