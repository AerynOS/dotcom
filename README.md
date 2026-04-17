# AerynOS dotcom

Hugo site for AerynOS, using the Hextra theme

**Requirements**
- `hugo` (extended) 0.146.0 or newer
- `go` (required for Hugo modules)
- `git`

**Clone**
```bash
git clone https://github.com/AerynOS/dotcom.git
cd dotcom
```

**Project Structure**
- `hugo.yaml` Site configuration
- `content/` Site content (pages, docs, blog)
- `static/` Static assets copied as-is
- `assets/` Asset pipeline inputs
- `data/` Data files
- `i18n/` Translations
- `archetypes/` Content templates
- `go.mod` and `go.sum` Hugo module pins

**Run Locally**
```bash
hugo server --bind 127.0.0.1 --port 1313
```

**Build**
```bash
hugo
```
This writes the production site to `public/`.

**Update Hextra**
Latest tagged release:
```bash
hugo mod get -u github.com/imfing/hextra
hugo mod tidy
```

Pin a specific release:
```bash
hugo mod get github.com/imfing/hextra@v0.11.1
hugo mod tidy
```

Track the main branch:
```bash
hugo mod get github.com/imfing/hextra@main
hugo mod tidy
```

Verify the pinned version:
```bash
hugo mod graph
```
