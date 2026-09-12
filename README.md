# haydensmith8923.github.io

Personal site: who I am, what I work on, and what I care about outside of work. Built with [Astro](https://astro.build), deployed automatically to GitHub Pages on every push to `main`.

## Structure

- `/` — home / hook
- `/about` — personal story, built as a scroll-reveal timeline
- `/professional` — experience, skills, projects, résumé
- `/fun` — movie takes and sports teams
- `/contact` — links

## Editing content

- **Timeline (About page):** add a new markdown file to `src/content/timeline/`. Frontmatter needs `year`, `title`, `order`; wrap any phrase you want highlighted in `<mark>...</mark>` inside the body text.
- **Movies (Fun page):** add a file to `src/content/movies/` with `title`, `rating` (1-5), `verdict`.
- **Teams (Fun page):** add a file to `src/content/teams/` with `name`, `league`, `sinceWhen`, `blurb`.
- **Résumé:** replace `public/resume.pdf` with the real file.
- **Professional page content:** edit the placeholder arrays directly in `src/pages/professional.astro`.
- **Contact links:** edit the array in `src/pages/contact.astro`.

## Commands

| Command           | Action                                      |
| ------------------ | -------------------------------------------- |
| `npm install`      | Install dependencies                         |
| `npm run dev`      | Start local dev server at `localhost:4321`   |
| `npm run build`    | Build production site to `./dist/`           |
| `npm run preview`  | Preview the production build locally         |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo's **Settings → Pages**, the source must be set to **GitHub Actions** (one-time setup).
