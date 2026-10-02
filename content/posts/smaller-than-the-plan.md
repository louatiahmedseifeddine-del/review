---
title: Smaller than the plan
date: "2026-09-14"
excerpt: The work that ships is a slice thin enough to finish before the idea gets bored of itself.
tags:
  - software
  - craft
---

Most of the plans I trust start too large. They describe a product, a quarter, a rewrite. The work that actually ships is a slice thin enough to finish before the idea gets bored of itself.

A smaller cut has three properties:

1. Someone can use it without a tour.
2. It removes one specific annoyance.
3. You can tell, in a sitting, whether it worked.

The rest of the plan can stay in the notebook. It is not discarded. It is just not allowed to block the first true thing.

```ts
function scope(idea: string) {
  return idea.split(".").slice(0, 1).join(".");
}
```

That function is a joke, and also a rule I keep breaking. The sentence after the period is usually where the project starts to hide.
