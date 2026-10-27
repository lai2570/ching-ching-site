# Chin Chin — Site

Static site, no build step. Open `index.html` directly in a browser to preview locally,
or run a local server:

```
npx serve .
```

Live at https://lai2570.github.io/ching-ching-site/ (GitHub Pages, `master` branch, `/` root).

## ⚠️ This repo is public

Everything committed here — including git history — is visible to anyone. Keep internal
notes, legal/business planning, and form response data **out of this folder** (or list
them in `.gitignore` *before* the first `git add`).

## Languages

The page text is in English in the HTML, and `js/i18n.js` swaps it to 中文 or မြန်မာ.

- To change any text, edit it in **all three** languages in `js/i18n.js` (and the English
  in the HTML too, so the no-JS / search-engine version matches).
- To translate a new element, give it `data-i18n="some.key"` and add `some.key` to each
  language in `js/i18n.js`.
- Link straight to a language with `?lang=zh` or `?lang=my`, e.g.
  `https://lai2570.github.io/ching-ching-site/?lang=my` for Burmese followers.
- The Google Forms are not translated by the site; they show whatever language the form
  itself is written in.

## Images

Photos are resized to ~900px wide before committing (phone photos straight from the camera
are 2–5 MB each). `images/og.jpg` (1200×630) is the preview shown when the link is shared
on Facebook / Instagram / LINE.
