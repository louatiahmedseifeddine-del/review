import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  featured: boolean;
  readingMinutes: number;
};

export type Post = PostMeta & {
  content: string;
};

type Frontmatter = {
  title?: string;
  date?: string | Date;
  excerpt?: string;
  tags?: string[];
  featured?: boolean;
};

function asDateString(value: string | Date | undefined): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return value ?? "1970-01-01";
}

function readingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function parseFile(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as Frontmatter;

  return {
    slug,
    title: frontmatter.title ?? slug,
    date: asDateString(frontmatter.date),
    excerpt: frontmatter.excerpt ?? "",
    tags: frontmatter.tags ?? [],
    featured: Boolean(frontmatter.featured),
    readingMinutes: readingMinutes(content),
    content: content.trim(),
  };
}

function allPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((filename) => filename.endsWith(".md"))
    .map(parseFile)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPosts(): PostMeta[] {
  return allPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    tags: post.tags,
    featured: post.featured,
    readingMinutes: post.readingMinutes,
  }));
}

export function getPost(slug: string): Post | undefined {
  return allPosts().find((post) => post.slug === slug);
}

export function getPostsByTag(tag: string): PostMeta[] {
  const needle = tag.toLowerCase();
  return getPosts().filter((post) =>
    post.tags.some((item) => item.toLowerCase() === needle),
  );
}

export function getTags(): string[] {
  const tags = new Set<string>();
  for (const post of getPosts()) {
    for (const tag of post.tags) tags.add(tag);
  }
  return [...tags].sort((a, b) => a.localeCompare(b));
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
