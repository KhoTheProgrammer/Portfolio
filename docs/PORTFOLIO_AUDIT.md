# Portfolio Deep Audit Report

**Date:** 2026-07-01
**Scope:** Appearance, functionality, logic, accessibility, performance, SEO, and code quality
**Stack:** React 19 + TypeScript + Vite 6 + Tailwind CSS 4, form handling via Formspree

---

## 1. Executive Summary

The portfolio is a well-organized single-page React/TypeScript app with clean component boundaries, a working dark-mode toggle, a functional contact form, and solid baseline SEO metadata. The biggest wins available are **image optimization** (several MB of uncompressed photos/screenshots), a handful of **dead-code/debug leftovers**, and **accessibility gaps** (missing `aria-label`s, no visible focus rings on some interactive elements). Nothing found rises to a security vulnerability — the only "secret" in source (the Formspree form ID) is meant to be public.

Overall scores (subjective, out of 10):

| Area | Score | Notes |
|---|---|---|
| Appearance/UX | 7.5 | Clean, responsive, dark mode works; a few dead links/placeholder features |
| Functionality/Logic | 7 | Core flows work; some dead code and minor state edge cases |
| Accessibility | 6.5 | Good semantic base, but missing labels and focus states in places |
| Performance | 6 | Small JS bundle, but unoptimized images are the main cost |
| SEO | 7.5 | Strong meta/OG tags; sitemap and structured data underdeveloped |
| Code Quality | 7.5 | Strict TS, clean structure; a few console.logs and duplicated hardcoded data |

---

## 2. Tech Stack Overview

- **Framework:** React 19.0.0 + TypeScript 5.7.2, bundled with Vite 6.2.0 (not Next.js — a plain SPA)
- **Styling:** Tailwind CSS 4.1.3 (`@tailwindcss/vite` plugin), `darkMode: "class"`
- **Routing:** `react-router-dom` 7.5.0 is installed **but not used anywhere** in the codebase — dead dependency
- **Forms:** `@formspree/react` 3.0.0 for the contact form
- **Icons:** `react-icons` 5.5.0
- **Animation:** `react-typed` for the hero typing effect (only animation lib in use — no Framer Motion, which keeps the bundle light)
- **Linting:** ESLint 9 flat config with TypeScript + react-hooks + react-refresh plugins — well configured
- **No Prettier**, **no test framework**, **no README.md**

### Project Structure
```
src/
├── components/        (11 components: Sidebar, Menu, ThemeToggle, Home, About,
│                        Resume, SkillSection/Skill, Project, Contact, Footer, BackToTop)
├── contexts/ThemeContext.tsx
├── constants/Projects.ts
├── types/Index.ts
└── assets/ (images, fonts, resume PDF)
```
Structure is clean: components, data, types, and context are properly separated. No file exceeds ~260 lines.

---

## 3. Appearance & UX Findings

| Severity | Finding | Location |
|---|---|---|
| Medium | Instagram social icon links to `"#"` — dead link, looks broken to visitors | `Sidebar.tsx` (~line 64) |
| Medium | `data-aos="fade-right"` attribute is set on the About section image, but the AOS (Animate On Scroll) library is never imported/initialized anywhere in the project — the animation silently never fires | `About.tsx` (~line 22) |
| Low | On the very smallest phone screens (<300px wide), the fixed `ThemeToggle` (`right-20` on mobile) sits close to the hamburger `Menu` button and could visually crowd/overlap | `ThemeToggle.tsx` |
| Low | Contact form's success banner uses a green background — worth double-checking contrast in dark mode meets WCAG AA | `Contact.tsx` |
| Low | Typo: "e.t.c" should be "etc." | `Resume.tsx` (~line 54) |
| Low | PWA manifest (`site.webmanifest`) has empty `name`/`short_name` fields — if the site is ever "installed" as a PWA, it shows a blank name | `public/site.webmanifest` |

**What's working well:** consistent dark-mode styling across every component (`dark:` classes applied comprehensively), responsive breakpoints are used sensibly (`md:`/`lg:` for typography and grid layouts), and the 3D flip-card skill display is a nice differentiator.

---

## 4. Functionality & Logic Findings

| Severity | Finding | Location |
|---|---|---|
| Medium | Two `onClick={() => console.log("pressed")}` debug handlers left on the Footer wrapper `<div>` and `<p>` — serve no purpose, and make the whole footer strip appear "clickable" with no actual behavior | `Footer.tsx` lines 5, 9 |
| Low | `react-router-dom` is a dependency but there's no `<BrowserRouter>`/`<Routes>` anywhere — this is a single-page app that uses scroll-to-section navigation instead. The dependency adds ~unused weight to `node_modules`/lockfile with no runtime benefit | `package.json` |
| Low | `react.svg` is imported somewhere in assets but not rendered/referenced by any component — dead asset | `src/assets/react.svg` |
| Low | `App.css` is an empty 1-line file — safe to delete | `src/App.css` |
| Low | Skills data (large nested arrays of languages/frameworks/tools) is hardcoded directly inside `SkillSection.tsx` rather than living in `constants/`, unlike `Projects.ts` which is properly externalized. Inconsistent pattern, harder to maintain | `SkillSection.tsx` |
| Low | Sidebar nav items array is inlined in the component rather than extracted to a constant — minor, but same inconsistency as above | `Sidebar.tsx` |

**Contact form logic** (`Contact.tsx`): Uses Formspree's `useForm` hook correctly — `state.submitting` disables the button text ("Sending..."), success shows a banner for 3 seconds then reverts to the form. HTML5 `required` + Formspree's `ValidationError` component handle validation. No client-side email regex beyond the native `type="email"`, no honeypot field — acceptable for a personal-portfolio contact form, Formspree's own account-level spam protection is the actual safety net. The form ID (`xqaqvgpp`) is hardcoded but that's expected/public for Formspree, not a leaked secret.

**Theme logic** (`ThemeContext.tsx`): Reads `localStorage.getItem("theme")`, falls back to `prefers-color-scheme: dark`, defaults to light. Applies/removes a `"dark"` class on `document.documentElement` inside a `useEffect`, persists on every change. This is correct but has one gap — see Performance section below (flash of incorrect theme).

---

## 5. Accessibility Findings

| Severity | Finding | Location |
|---|---|---|
| Medium | Hamburger `Menu` toggle button has no `aria-label` — screen reader users hear nothing describing its purpose | `Menu.tsx` |
| Medium | Sidebar navigation `<button>` items (Home, About, Resume, Skills, Projects, Contact) have no `aria-label`s or `aria-current` state to indicate the active section | `Sidebar.tsx` |
| Medium | No visible focus outline on most buttons/links (only form inputs and the skill flip-card have `focus:ring`/`focus:` styles) — keyboard users may lose track of focus position while tabbing through the sidebar and header controls | `Sidebar.tsx`, `Menu.tsx` |
| Low | No "skip to main content" link for keyboard/screen-reader users to bypass the sidebar | App-wide (`App.tsx`) |
| Low | `Footer.tsx` uses a generic `<div>` instead of the semantic `<footer>` element | `Footer.tsx` |
| Low | No `lang="en"` attribute confirmed on `<html>` in `index.html` — should be verified/added for correct screen-reader pronunciation | `index.html` |

**What's working well:** ThemeToggle and BackToTop both have proper `aria-label`s, all images have descriptive `alt` text, form labels are correctly associated via `htmlFor`/`id`, and color contrast in both light and dark themes looks solid (dark text on white, white text on near-black backgrounds).

---

## 6. Images & Performance

This is the single highest-leverage area for improvement. Measured file sizes in `src/assets/`:

| File | Size | Issue |
|---|---|---|
| `kho.jpeg` | 1.3 MB | **Unused duplicate** of the profile photo — not referenced anywhere, pure repo bloat |
| `kho2.jpg` | 928 KB | Actively used (Sidebar + About) — should be compressed/resized; a profile photo doesn't need to be this heavy |
| `lecturer-feedback.png` | 468 KB | Project screenshot, used as-is with no compression |
| `racing-game.png` | 388 KB | Same |
| `home.jpg` | 300 KB | Hero background, loaded via inline `style={{backgroundImage}}` — bypasses lazy loading entirely and blocks the largest, most important paint (LCP) |
| `donate eazy.jpg` | 268 KB | Project screenshot |
| `Konnektus.jpg` | 232 KB | Project screenshot (a `Konnektus.PNG` duplicate also exists, unused) |
| `quiz-management-system.png` | 164 KB | Project screenshot |
| `kho.jpg` | 160 KB | **Unused duplicate** |
| `dhis2.jpg`, `portfolio.jpg`, `smart-famer.png`, `voting.jpg`, `solar.jpg` | 44–140 KB each | Project screenshots, fine individually but add up |

**Total asset weight is roughly 4–5 MB**, and none of it is served as WebP/AVIF, none is lazy-loaded, and none uses responsive `srcset` sizing. All images are plain `<img>` tags (no `next/image` equivalent, since this isn't Next.js) with no `loading="lazy"` attribute anywhere in the codebase.

**Recommendations, in priority order:**
1. Delete unused duplicates: `kho.jpeg`, `kho.jpg`, `Konnektus.PNG`, `portfolio.PNG` (~1.5 MB reclaimed instantly, zero risk).
2. Compress `kho2.jpg` and the hero `home.jpg` — a profile photo and hero background rarely need to exceed 150–200 KB at web resolution. Tools: `squoosh.app`, `sharp`, or `vite-plugin-image-optimizer`.
3. Convert project screenshots to WebP (25–35% smaller at equivalent quality) with JPG/PNG fallback if broad browser support is a concern (it generally isn't in 2026).
4. Add `loading="lazy"` to all project-grid `<img>` tags — they're below the fold and don't need to block initial paint.
5. Move the hero background off an inline `style` and consider a properly sized/compressed image, or a CSS gradient placeholder while the image loads, to protect LCP.

**Bundle/runtime:** Dependency list is lean (no heavy animation or state-management libraries), so JS bundle size is not a concern. No `React.memo`/`useMemo` usage was found, but the app is small enough that this is unlikely to matter in practice — not a priority.

**Dark mode flash:** Because the `dark` class is applied inside a `useEffect` (after first paint) rather than via an inline `<script>` in `index.html` that runs before React mounts, users who prefer dark mode may see a brief flash of the light theme on page load/reload. Fix: add a tiny synchronous inline script in `index.html`'s `<head>` that reads `localStorage.theme` and sets the class on `<html>` immediately.

---

## 7. SEO Findings

**Strong points already in place** (`index.html`): descriptive `<title>`, a well-written meta description within the 160-character guideline, keywords meta tag, author tag, full Open Graph set (title/description/type/url/image/site_name), Twitter Card tags, and a canonical URL pointing to `https://www.khoopadyera.me`. Favicons are provided in multiple sizes plus Apple touch icon. `robots.txt` correctly allows all crawling and references the sitemap.

**Gaps:**
| Severity | Finding |
|---|---|
| Medium | `sitemap.xml` contains only the homepage URL — since this is a single-page app with in-page anchor sections (not separate routes), this is *largely correct*, but it's worth confirming `lastmod` is kept current and considering whether any standalone pages (e.g., a dedicated project or blog page) are planned that would need their own entries |
| Low | No JSON-LD structured data (e.g., `Person` schema) — would improve how Google displays the site in search results (knowledge panel eligibility) |
| Low | No explicit `og:locale` tag |
| Low | Confirm `<html lang="en">` is set (accessibility issue too, see above) |

---

## 8. Code Quality & Config

- **TypeScript config** (`tsconfig.app.json`): `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` all enabled — this is a genuinely strong, disciplined setup and explains why no `any` types or unused-variable violations were found anywhere in the codebase.
- **ESLint**: modern flat-config format with TypeScript + react-hooks + react-refresh — good coverage for a project this size.
- **No Prettier** configured — not a blocker, but formatting consistency currently relies entirely on ESLint + editor settings.
- **No tests** exist (`no Jest/Vitest`, no `*.test.ts`). For a portfolio site this is low-risk, but if the contact form or navigation logic grows more complex, at least a smoke test for `Contact.tsx`'s submit flow would catch regressions.
- **No README.md** — a short one covering `npm install`, `npm run dev`, `npm run build`, and deployment target (Netlify/Vercel, matching the skill list) would help future-you or collaborators.

---

## 9. Prioritized Fix List

**Quick wins (< 30 min total, no risk):**
1. Remove `console.log("pressed")` handlers in `Footer.tsx` (lines 5, 9).
2. Delete unused duplicate images: `kho.jpeg`, `kho.jpg`, `Konnektus.PNG`, `portfolio.PNG`.
3. Delete unused `react.svg` and empty `App.css`.
4. Fix Instagram link in `Sidebar.tsx` (either link it or remove the icon).
5. Fix "e.t.c" → "etc." typo in `Resume.tsx`.
6. Remove the dead `data-aos="fade-right"` attribute in `About.tsx` (or actually wire up a lightweight scroll-reveal if the effect is wanted).
7. Populate `name`/`short_name` in `site.webmanifest`.

**Medium effort, high impact:**
8. Compress/resize `kho2.jpg` and `home.jpg`; convert project screenshots to WebP.
9. Add `loading="lazy"` to all project-grid images.
10. Add `aria-label`s to the `Menu` button and each `Sidebar` nav button; add visible `focus:ring`/`focus:outline` styles to interactive elements that lack them.
11. Add the inline dark-mode-detection script to `index.html` to eliminate theme flash.
12. Remove the unused `react-router-dom` dependency (or start actually using it if multi-page routing is planned).

**Nice to have:**
13. Extract Skills data and Sidebar nav items into `constants/` for consistency with `Projects.ts`.
14. Add a `Person` JSON-LD structured data block.
15. Add a short README.md.
16. Add a basic smoke test for the contact form submission flow.

---

## 10. What NOT to Worry About

- The Formspree form ID being visible in source is expected and not a security issue.
- No exposed API keys or secrets were found anywhere in the codebase.
- No XSS/injection-style vulnerabilities were found — no `dangerouslySetInnerHTML`, no unsanitized user input rendered back to the DOM.
- External links correctly use `target="_blank" rel="noopener noreferrer"` throughout (Resume, Projects sections) — good security hygiene already in place.
