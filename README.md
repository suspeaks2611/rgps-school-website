# Rudra Goswami Public School (RGPS) website

A seven-page, framework-free static website for Rudra Goswami Public School, Vahelal, Ahmedabad, Gujarat. It uses HTML, CSS and vanilla JavaScript. The official RGPS identity sheet supplied for this project provides a primary logo, horizontal logo, emblem and monochrome logo; each is cropped into its own local asset under `assets/logo/`.

## Run locally

Open `index.html` directly, or serve this folder with a static web server. For example, with Python installed, run `python -m http.server 8000` from this directory and visit `http://localhost:8000`. No build step or package install is required.

## GitHub Pages deployment

The project is configured for `https://suspeaks2611.github.io/rgps-school-website/`. The repository contains a GitHub Actions workflow at `.github/workflows/deploy.yml` that publishes the site root on pushes to `main`. In repository Settings → Pages, set the source to GitHub Actions if it is not enabled automatically. The canonical URLs, sitemap, robots file and Open Graph image URLs are configured for this Pages address; update them if the repository name or hosting domain changes.

## Custom domain

Purchase and verify a domain, set the DNS records GitHub Pages specifies for that domain, and add the domain under Settings → Pages. Enforce HTTPS after DNS verification. Update `sitemap.xml` and the sitemap line in `robots.txt` to the final HTTPS domain. The exact DNS records depend on the registrar and chosen host setup.

## Update school photographs

The gallery and selected page sections use six RGPS photographs supplied for this project, stored locally under `assets/images/`. Their descriptive alt text appears with each image. Add or replace images in that folder and update the page markup and gallery lightbox data when the school provides more photographs.

## Update school contact details and map

The exact Google Maps pin supplied by RGPS is linked from `contact.html` and included in the organization structured data. The published locality remains Vahelal, Ahmedabad, Gujarat, India; no street address or coordinates were supplied. Phone, email, principal information, domain and social profiles also remain unconfigured. Do not infer those details from the map link.

## Connect a real enquiry form

`js/forms.js` contains the documented integration point. The current forms validate fields and show that the demo did not send or store data. They do not submit anywhere. Connect a verified backend or form provider, configure server-side validation and privacy handling, and update the visible notices before collecting actual enquiries. Do not put API secrets in frontend code.

## Official logos

The four RGPS logo variants are stored under `assets/logo/`: the emblem is used in navigation and as the favicon, the horizontal logo appears in the footer, the primary logo accents the About page, and the monochrome logo appears on Contact. The crops were made from the supplied identity sheet.

## Project files

- Seven standalone pages: `index.html`, `about.html`, `mission.html`, `academics.html`, `admissions.html`, `gallery.html`, `contact.html`.
- Shared design system: `css/style.css`, `css/responsive.css`, `css/animations.css`.
- Interactions: `js/main.js`, `js/forms.js`, `js/gallery.js`, `js/animations.js`.
- SEO/deployment placeholders: `sitemap.xml`, `robots.txt`.
