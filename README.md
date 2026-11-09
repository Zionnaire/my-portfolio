# Ademola Abraham: portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4, exported as a static site.
No UI kit. Fonts (Newsreader, Geist) load through `next/font`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # static export to ./out
npm start          # serve ./out locally (uses `npx serve`)
```

## Edit content

Everything lives in **`src/data/site.ts`**: hero copy, dial stations, case
studies, more-work list, about, skills, contact and links. Components only
render it. Fields marked `// CONFIRM` are drafts written from the original
template (problem statements, roles, technical-decision reasoning). Read and
correct them before publishing.

- Set `site.url` to your real domain. Metadata, the sitemap and robots.txt use it.
- To add a case study, add an entry to `caseStudies`. The page at
  `/work/<slug>/` is created automatically. Add a matching station in
  `stations` with the same `slug` if you want it on the dial.

## Add screenshots

See **`public/images/README.md`** for the exact filenames and sizes. Drop the
files in `public/images/` and rebuild. Until a file exists, the site shows a
placeholder with the filename. Crop browser chrome and use demo accounts so no
real names or patient data appear.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New → Project** and import the repo. The Next.js preset
   is detected automatically; the defaults are fine.
3. Deploy. Add your custom domain in **Settings → Domains**, then update `site.url`.

Because `output: "export"` is set, the build also works on GitHub Pages (upload
the `out/` folder). If it is served from a sub-path, add `basePath` in
`next.config.ts`.

## Notes

- `legacy/index.html` is the original single-file template, kept for reference.
- The share image (Open Graph / Twitter) is generated in `src/app/opengraph-image.tsx`.
- Theme: follows the system setting; the header button cycles Auto, Light, Dark and remembers the choice.
