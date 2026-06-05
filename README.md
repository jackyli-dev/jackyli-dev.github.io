# Jacky Li Portfolio

Hugo portfolio site using the
[hugo-coder](https://github.com/luizdepra/hugo-coder) theme.

## Local Development

Install Hugo Extended, then run:

```sh
hugo server
```

Build the production site:

```sh
hugo --minify
```

Generated files are written to `public/` and are not committed.

## Content

- Edit the homepage profile details in `hugo.toml`.
- Edit About and Contact pages in `content/about.md` and `content/contact.md`.
- Add project pages under `content/projects/`.
- Replace the placeholder resume at `static/docs/resume.pdf`.
- Add project screenshots and videos under `static/projects/<project-slug>/`.

Project files use Markdown with front matter for tags, links, media, and tech
stack metadata. Copy one of the existing project files for a new project.

## Deployment

GitHub Actions builds Hugo and publishes the generated site to GitHub Pages on
pushes to `main`.
