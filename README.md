# Vanshika Shah — Portfolio

Personal portfolio site, built with Next.js and hosted on GitHub Pages.

## Run locally

```bash
npm install     # first time only
npm run dev     # http://localhost:3000, reloads as you edit
```

## Update content

All text, links, jobs, projects, skills and certifications live in
[`data/portfolio.js`](data/portfolio.js). Edit that file; the components pick up the changes.

- **Headshot:** `public/images/vanshika-headshot.webp`.
- **Résumé:** `resumeUrl` takes any link (currently Google Drive), or add `public/resume.pdf` and use `"/resume.pdf"`.
- **Phone number:** set `phone` to show it in the hero.
- **New project:** add an entry to `projects`, with a 16:9 cover image in `public/images/projects/`.
  `featured: true` also shows it on the home page; `href` adds a "View on GitHub" link.
- **New job:** add an entry to `experience` with `group: "industry"` or `"academic"`.

## Pages

| URL            | Contents                                                     |
| -------------- | ------------------------------------------------------------ |
| `/`            | Hero and featured projects                                   |
| `/about/`      | Bio, education & awards, skills, certifications, coursework  |
| `/experience/` | Timeline of industry and research/teaching roles             |
| `/projects/`   | All projects as image cards                                  |

The nav bar, contact band and footer are shared by every page (`app/layout.js`).

## Project layout

```
app/            one folder per page, plus the shared layout, styles, favicon, link-preview image
components/     page sections (Hero, Timeline, ProjectCard, Education, ...)
components/ui/  shared pieces: PageHeader, Section, Button, Tag, StatPanel, scroll Reveal
data/           site content
public/         static files served as-is (headshot, project covers)
```

## Deploy

Pushing to `main` builds the site and publishes it via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup: create a GitHub repo named `vanshikashah318.github.io`, push this project to it,
then in the repo go to **Settings → Pages → Source** and choose **GitHub Actions**.

To check the production build locally: `npm run build` (outputs static files to `out/`).
