# Image slots

Drop files into this folder with **exactly** these names. Until a file exists,
the site shows a neutral placeholder naming the file and size. Rebuild
(`npm run build`, or restart `npm run dev`) after adding images.

Tips: crop out browser tabs and the address bar; use a demo account so no real
names, emails or patient data appear; export PNG or JPG under ~400 KB each.

| Filename | Size (px) | Used for |
|---|---|---|
| `planamwell-hero.png` | 1600 × 1000 | PlanAmWell web home page (desktop) |
| `planamwell-mobile-home.png` | 562 × 1280 | PlanAmWell mobile home screen (portrait) |
| `planamwell-assistant.png` | 900 × 1600 | Ask AmWell assistant screen (portrait) |
| `immuniwatch-hero.png` | 1600 × 733 | ImmuniWatch analyst dashboard |
| `immuniwatch-review.png` | 1200 × 800 | Review queue |
| `immuniwatch-drift.png` | 1200 × 800 | Model health / drift view |
| `efims-hero.png` | 1600 × 1000 | EFIMS case workspace |
| `efims-case.png` | 1200 × 800 | Open case with timeline |
| `efims-audit.png` | 1200 × 800 | Audit trail view |
| `aiinhealth.png` | 1600 × 733 | More work: AI in Health Summit |
| `pact2.png` (home), `pact1.png` (paired) | 540 × 1113 | More work: Pact app screens |
| `ademola-hero.png` | 1000 × 1200 | Hero portrait. A cut-out with a transparent background looks best; falls back to `ademola.jpg` |
| `ademola.jpg` | 960 × 1280 | Portrait for the About section |

The Open Graph / Twitter share image is generated automatically
(`src/app/opengraph-image.tsx`), so you don't need to supply one.

To use different filenames or sizes, change the `hero`, `screens` and `photo`
entries in `src/data/site.ts`.
