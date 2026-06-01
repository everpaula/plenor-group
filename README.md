# Plenor Group LLC · Website

Single-page institutional landing for **Plenor Group LLC** (Florida, filed 05/30/2026).

## Files

- `index.html` — full landing page, single file, self-contained
- `README.md` — this file

## Content rationale

| Section | Why it's there |
|---|---|
| Hero "Operating discipline that scales" | Brand thesis in 4 words. Captures operator math + executive credibility without claiming AI/SaaS positioning. |
| Three services | Fractional / Advisory / Operating system design. Maps to the three engagement types of the bridge income strategy (W-2 alternative + advisory + productized methodology). |
| Six stat cards | Operator-math proof: 4× zero-to-one, 8 countries, $40M P&L, 5M+ daily, 107%, MBB. No employer names. No "LATAM" anchor. |
| Tools section | Links the three tools demoed live at BySupply R2 (vendor scorecard, logistics supply, workforce forecast) plus "See all 10" deep link. Toolkit becomes proof of methodology. |
| About + pullquote | Builder-operator positioning. Anti-slide thesis stated directly. Pullquote captures founder voice for first-time visitors. |
| CTA banner | Single conversion path: email contact@plenorgroup.com. No contact form to maintain. Two business day SLA stated. |
| Footer | Three column institutional pattern. Toolkit link + GitHub for proof. Tampa + remote/on-site positioning. |

## Compliance audit (vs central memory rules)

- ✅ Zero em-dashes anywhere in copy
- ✅ Zero banned words (leverage, optimize, scalable, robust, seamless, holistic, transformative, streamline, empower, data-driven)
- ✅ Zero employer names (refers to "a global ride-hailing platform", "a regional marketplace", "a major insurance incumbent")
- ✅ Country counts instead of "LATAM" ("8 countries", "9 markets")
- ✅ Operator math numbers preserved (5M+, $40M, 107%)
- ✅ Honest positioning ("Built on operator math, not slide decks" — not claiming AI/SaaS)

## Pre-launch checklist

Before pointing plenorgroup.com to the deployed page:

1. **Email setup** — `contact@plenorgroup.com` must be live. Options:
   - Google Workspace ($7/mo, recommended)
   - Cloudflare Email Routing (free, forwards to evertonsilvapaula@gmail.com)
   - Namecheap email hosting ($0.91/mo)

2. **OG image** — `og-image.jpg` (2752×1536, 2.6MB) is in the folder. Functional out of the box. Optimization recommended:
   - Resize to 1200×630 via [Squoosh.app](https://squoosh.app) (free) to drop to ~150-300KB
   - Replace `og-image.jpg` with the optimized version before deploy
   - LinkedIn / Twitter / Facebook will pull this image for link previews

3. **LinkedIn company page** — create at `linkedin.com/company/plenor-group` before going live so the footer link resolves

4. **Favicon** — currently uses inline SVG with "P" mark in accent navy. Replace with proper favicon set later if desired.

## Deployment: GitHub + Vercel

Same flow used across FakeForge, CalculaHub, marketplace-ops-toolkit projects. Auto-deploys on every push to `main`.

### Steps (~15 min)

**1.** Create repo on GitHub: `everpaula/plenor-group` (public or private both work with Vercel).

**2.** Push the local folder:
```powershell
cd "c:\Users\evert\OneDrive\Desktop\Complete Agency\plenor-group"
git init
git add .
git commit -m "initial landing v1"
git branch -M main
git remote add origin https://github.com/everpaula/plenor-group.git
git push -u origin main
```

**3.** Vercel → [vercel.com/new](https://vercel.com/new) → Import `everpaula/plenor-group`:
   - Framework Preset: **Other**
   - Build Command: leave empty
   - Output Directory: leave empty
   - **Deploy**

Site goes live on `plenor-group-xxxxx.vercel.app` in ~30 seconds.

**4.** Vercel project → **Settings** → **Domains**:
   - Add `plenorgroup.com`
   - Add `www.plenorgroup.com`

**5.** Configure DNS (assumes Cloudflare DNS already migrated per separate playbook):

| Type | Name | Target | Proxy |
|---|---|---|---|
| A | `@` | `76.76.21.21` | DNS only (grey cloud) |
| CNAME | `www` | `cname.vercel-dns.com` | DNS only (grey cloud) |

⚠️ Keep proxy **grey** (DNS only). Vercel handles SSL + CDN. Orange proxy conflicts with Vercel's SSL provisioning.

**6.** Vercel auto-provisions Let's Encrypt SSL in 1-3 min. Both `plenorgroup.com` and `www.plenorgroup.com` show ✅ green.

Done. `https://plenorgroup.com` is live.

### Why Vercel over GitHub Pages

| | GitHub Pages | Vercel |
|---|---|---|
| Auto-deploy on push | ✓ | ✓ |
| SSL provisioning time | ~30 min | 1-3 min |
| Preview deploys per branch | ✗ | ✓ |
| Analytics built-in | ✗ | ✓ (free tier) |
| Rollback | git revert + push | 1-click in UI |
| Global CDN edge nodes | OK | Faster |

### Subsequent updates

Every `git push` to `main` triggers auto-deploy. PRs get a preview URL for testing before merging.

To roll back: Vercel dashboard → Deployments → click the previous one → Promote to Production.

## Local preview

Open `index.html` directly in a browser (no build step required). The page is fully static and self-contained except for:
- Google Fonts (Inter + Source Serif 4) — loaded from CDN
- External links to marketplace-ops-toolkit on GitHub Pages

No JavaScript dependencies. Smooth-scroll uses CSS only.

## Brand assets (TODO)

These do not exist yet but should be created post-launch:

- Logo wordmark SVG (current implementation uses Source Serif 4 weight 600 in CSS)
- Favicon set (16, 32, 180, 192, 512)
- OG image (1200×630)
- Apple touch icon
- LinkedIn company page banner (1128×191)

## Updates log

- 2026-05-30 · Initial landing page shipped. Six stats, three services, three tools, single CTA.
