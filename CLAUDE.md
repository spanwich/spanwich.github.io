# CLAUDE.md

## Commands

- `npm run dev` — Start Next.js dev server
- `npm run build` — Build static export to `docs/`
- `npm run lint` — Run ESLint (next lint)

## Architecture

- **Next.js 13** App Router (`app/` directory)
- Static export: `output: "export"`, `distDir: "docs"` (served via GitHub Pages)
- **Tailwind CSS** with custom theme, `@tailwindcss/typography`, `tailwindcss-animate`
- Path alias: `@/*` maps to project root

## Key Patterns

- **Dark mode**: class-based (`darkMode: "class"` in Tailwind config)
- **Theme utilities**: `styles/theme.css` for CSS custom properties and theme tokens
- **CSS Modules**: used for component-level styles
- **Font**: Noto Sans Thai (loaded via `next/font/google`)

## Configuration

- `next.config.js`: `output: "export"`, `distDir: "docs"`
- `tsconfig.json`: `@/*` path alias
- ESLint: `eslint-config-next`, `eslint-config-prettier`, `eslint-plugin-tailwindcss`
