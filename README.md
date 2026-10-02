# Review

A small reading journal. Essays live as markdown in `content/posts` and render on the index, the archive, and their own pages.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add an essay

Create `content/posts/your-slug.md`:

```md
---
title: Your title
date: "2026-10-02"
excerpt: One or two sentences for the index.
tags:
  - writing
featured: false
---

The essay itself, in markdown.
```

The filename becomes the URL: `/posts/your-slug`.
