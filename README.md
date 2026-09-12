# Mind Atlas

Mind Atlas is a local-first educational psychology library built with Next.js App Router, TypeScript, and Tailwind CSS. It includes 56 evidence-aware articles, topic collections, learning paths, search and filtering, local bookmarks, light/dark/system themes, reading controls, a glossary, references, and an interactive Stroop demonstration.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is already in use, Next.js prints the alternate local address.

## Validate

```bash
npm run lint
npm run build
```

The production build is exported to `out/`. Set `NEXT_PUBLIC_SITE_URL` before building if you want sitemap and social metadata to use an origin other than `http://localhost:3000`.

## Content and structure

- `lib/content.ts` contains typed articles, references, categories, and learning paths.
- `components/` contains the interactive shell, search, reading tools, article template, and demonstration.
- `app/` contains the canonical routes and page metadata.

Bookmarks and theme choices are stored in the current browser and do not synchronize between devices. Mind Atlas is educational and does not provide clinical advice.
