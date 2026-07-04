# Chin Chin — Site

Static site, no build step. Open `index.html` directly in a browser to preview locally,
or run a local server:

```
npx serve .
```

## Before launch — content checklist

- [ ] Replace hero photo placeholder with a real photo (`.hero-photo`, index.html)
- [ ] Write real intro copy in the hero `<p class="lead">`
- [ ] Write real bio in the About section
- [ ] Fill in "Based since [year]" stat
- [ ] Create the Study Abroad Google Form (see suggested fields in the HTML comment
      above the placeholder) and paste its `<iframe>` embed code in, replacing the
      `[Google Form embed goes here]` placeholder
- [ ] Create the Chinese Tutoring Google Form the same way
- [x] Replace `REPLACE_WITH_EMAIL@example.com` with a real contact email (appears twice)
- [ ] Replace Instagram / Facebook `REPLACE_ME` links with real profile URLs

## Deploying to GitHub Pages (private source, public site)

1. Create a **private** repo on GitHub (Settings stay private; the published site is
   still public — that's expected and fine).
2. Push this folder to it:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. In the repo: Settings → Pages → Source → deploy from `main` branch, `/ (root)`.
4. GitHub gives you a URL like `https://<username>.github.io/<repo>/`. Custom domain
   can be added later under the same Pages settings.
5. Turn on 2FA on the GitHub account (Settings → Password and authentication).

## Form data note

Google Form responses land in Google Sheets under the account that created the form —
never commit form response data into this repo.
