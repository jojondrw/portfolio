# Portfolio site

Static HTML, CSS and one small JS file. No build step, no dependencies.

```
index.html      all the content
style.css       all the styling
script.js       one scroll listener for the nav border
assets/
  img/          project screenshots
  Jonathan_Andrew_Saleh_CV.pdf
```

## Editing

Open `index.html` and change the text directly. Each project is one
`<section class="project">` block. To swap a screenshot, drop the new file in
`assets/img/` and change the `src` on the `<img>`.

To update the CV, replace `assets/Jonathan_Andrew_Saleh_CV.pdf` with the new
file, keeping the same filename so the link keeps working.

## Deploying

Pushed to GitHub and connected to Vercel. Every push to `main` redeploys to the
same production URL.

## Local preview

```bash
python -m http.server 5173
```

Then open http://localhost:5173
