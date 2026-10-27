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

### Editing text from Google Sheets

If `SHEET_CSV_URL` at the top of `js/i18n.js` is set, the site loads that published Google
Sheet on every visit and uses its text instead of the built-in text. Chin Chin edits the
sheet; no code change or deploy is needed. Google refreshes the published copy within
about 5 minutes.

- Sheet columns: `位置（說明）` (just a note), `key`, `en`, `zh`, `my`. **Don't change the
  `key` column** — it's how the site knows where each text goes.
- An empty cell keeps the built-in text for that spot.
- The sheet only changes what visitors see after the page loads. Search engines and
  link previews still read the English written in the HTML, so for big rewrites of the
  English, update `index.html` / `about.html` too.
- Adding a brand-new piece of text (not just changing existing text) still needs a code
  change: a `data-i18n` key in the HTML, plus a row in the sheet.

## Images

Photos are resized to ~900px wide before committing (phone photos straight from the camera
are 2–5 MB each). `images/og.jpg` (1200×630) is the preview shown when the link is shared
on Facebook / Instagram / LINE.
