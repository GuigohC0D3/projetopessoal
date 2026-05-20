# Guilherme Ancheschi Werneck Pereira — Portfolio

Personal portfolio built as a single-page application with animated 3D background, real-time GitHub stats, and smooth scroll navigation.

**Live:** [guilhermeancheschiwerneckpereiraportfoli-g05v.onrender.com](https://guilhermeancheschiwerneckpereiraportfoli-g05v.onrender.com)

---

## Features

- **Single-page** — all sections in one scroll, no page reloads
- **Animated 3D background** — Vanta NET (Three.js) running as a single global instance
- **Scroll progress bar** — Framer Motion spring animation at the top of the viewport
- **Active section detection** — navbar highlights the current section via IntersectionObserver
- **GitHub API stats** — public repos and total commits fetched live from the GitHub REST API
- **Animated counters** — numbers animate into view only when visible (IntersectionObserver)
- **Contact form** — EmailJS integration, sends messages directly to email
- **Tech Stack section** — 25+ technologies with colored icons grouped by category
- **Custom scrollbar** — gradient-styled, thin scrollbar matching the color palette
- **Fully responsive** — mobile hamburger menu, responsive grids throughout

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | React 19 + Vite 6 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Framer Motion 12, Three.js, Vanta.js |
| Icons | React Icons v5 (FA + SI sets) |
| 3D / Background | Three.js + Vanta NET |
| Tilt Effect | react-parallax-tilt |
| Email | @emailjs/browser |
| Linting | ESLint 9 (flat config) |

---

## Project Structure

```
portfolio_do_guigo/
├── public/
│   └── Curriculo_Guilherme_Ancheschi_Werneck_Pereira (4).pdf
├── src/
│   ├── assets/
│   │   └── foto_nova.jpg
│   ├── components/
│   │   ├── AnimatedCounter.jsx     # Counter animates on viewport entry
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx              # Scroll nav + active section detection
│   │   ├── ScrollProgress.jsx      # Framer Motion spring progress bar
│   │   └── ScrollToTopButtons.jsx
│   ├── hooks/
│   │   └── useGitHubStats.js       # GitHub REST API (repos + commits)
│   ├── pages/
│   │   ├── Contact.jsx             # EmailJS contact form
│   │   ├── Home.jsx                # Hero + live GitHub stats cards
│   │   ├── Resume.jsx              # Timeline + Certifications + Tech Stack
│   │   ├── Services.jsx            # Service cards with tilt effect
│   │   └── Work.jsx                # Filterable project grid
│   ├── App.jsx                     # Vanta global instance + section layout
│   ├── index.css                   # Custom scrollbar + global styles
│   └── main.jsx
├── vite.config.js                  # Manual chunks (vendor / framer / three)
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/GuigohC0D3/portfolio_do_guigo.git
cd portfolio_do_guigo
npm install
```

### Environment Variables

Create a `.env` file in the project root. Required for the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your keys at [emailjs.com](https://www.emailjs.com). The GitHub stats use the **public REST API** — no token needed.

### Running Locally

```bash
npm run dev
```

Starts the dev server on `http://localhost:5173` (accessible on the local network via `--host`).

### Build

```bash
npm run build
```

Output goes to `dist/`. Chunks are split manually:

| Chunk | Contents | Gzip |
|-------|----------|------|
| `three-*.js` | Three.js | ~157 KB |
| `framer-*.js` | Framer Motion | ~38 KB |
| `vendor-*.js` | React + ReactDOM | ~17 KB |
| `index-*.js` | Application code | ~78 KB |

### Preview Production Build

```bash
npm run preview
```

---

## Architecture Notes

### Single Global Vanta Background

Vanta internally forces `position: relative` on its target element, breaking `position: fixed`. The fix uses a two-layer structure in `App.jsx`:

```jsx
{/* Outer div handles fixed positioning — Vanta never touches it */}
<div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
  {/* Inner div is Vanta's target — free to set position: relative */}
  <div ref={vantaRef} style={{ width: "100%", height: "100%" }} />
</div>

{/* main creates an isolated stacking context above the Vanta layer */}
<main className="relative z-[1] isolate">
  ...sections...
</main>
```

### GitHub Live Stats

`src/hooks/useGitHubStats.js` fires two parallel requests on mount:

- `GET /users/GuigohC0D3` → `public_repos`
- `GET /search/commits?q=author:GuigohC0D3` → `total_count`

Both are unauthenticated public endpoints. Displays a skeleton pulse while loading.

### Scroll Navigation

`Navbar.jsx` uses `IntersectionObserver` with `threshold: 0.25` and `rootMargin: "-64px 0px -40% 0px"` to detect which section is active. Clicking a nav item calls a `scrollTo(id)` helper that offsets by 64px (navbar height) using `window.scrollTo({ behavior: "smooth" })`.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## License

MIT © 2025 Guilherme Ancheschi Werneck Pereira
