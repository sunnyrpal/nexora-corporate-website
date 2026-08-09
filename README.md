# Nexora Premium Corporate Website

A responsive static corporate website built with semantic HTML5, Tailwind CSS, and vanilla JavaScript.

## Files
- `index.html` — complete website
- `styles.css` — custom UI, animations, responsive behavior
- `script.js` — navigation, dark mode, scroll reveal, progress bar, contact form
- `company-profile.html` — downloadable/printable company profile

## Run locally
Open `index.html` directly, or use a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before launch
1. Replace the Nexora name, copy, stats, phone, address, email, and social URLs.
2. Replace the example `company-profile.html` with your actual branded PDF if you have one.
3. In `script.js`, replace `hello@nexora.example` with the real receiving address if using mailto.
4. For a production contact form, connect the form to Formspree, Netlify Forms, a serverless API, or your CRM.
5. Replace placeholder legal links with real Privacy Policy, Terms, and Cookie Policy pages.
6. For maximum performance, install Tailwind locally and compile/minify CSS instead of relying on the CDN.

## Vercel deployment
1. Create a GitHub repository and upload these files.
2. Sign in to Vercel and import the repository.
3. Framework preset: Other / static site.
4. Build command: leave empty.
5. Output directory: `/`.
6. Deploy.
7. In Vercel → Project → Settings → Domains, add your custom domain.
8. At your domain registrar, follow Vercel's displayed DNS records exactly.
9. Wait for DNS propagation and HTTPS issuance.

## Netlify deployment
1. Push the files to GitHub, or drag the project folder into Netlify.
2. For Git deployment, choose the repository.
3. Build command: none.
4. Publish directory: `/`.
5. Deploy.
6. Open Site configuration → Domain management → Add custom domain.
7. Follow Netlify's DNS instructions at your registrar.

## GitHub Pages
1. Push the project to a GitHub repository.
2. Open Settings → Pages.
3. Select Deploy from a branch.
4. Select the main branch and `/root`.
5. Save.
6. GitHub will provide the Pages URL.
7. Add a custom domain in the Pages settings and configure DNS as instructed.

## Performance checklist
- Use WebP/AVIF images and explicit width/height attributes.
- Keep hero media compressed and preload only critical assets.
- Replace CDN Tailwind with a compiled production CSS build.
- Add a real favicon and social/Open Graph metadata.
- Test with Lighthouse/PageSpeed before launch.
# nexora-corporate-website
