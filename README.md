# Prachi Thorat — Portfolio

React + Vite + Framer Motion + Lenis.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run lint
```

## Structure

- `src/index.css` — design tokens + all section styles (single source of truth)
- `src/lib/scroll.js` — shared Lenis smooth-scroll instance + `scrollToId`
- `src/lib/motion.js` — shared easing
- `src/components/ui.jsx` — `Reveal`, `Words`, `CountUp`, `Card` (spotlight + tilt), `Magnetic`, `SectionHead`
- `src/components/*` — one file per section (edit the data arrays at the top of each file)
