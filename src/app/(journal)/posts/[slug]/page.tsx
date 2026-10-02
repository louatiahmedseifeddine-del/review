import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { formatDate, getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/posts/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage(props: PageProps<"/posts/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const posts = getPosts();
  const index = posts.findIndex((item) => item.slug === post.slug);
  const newer = index > 0 ? posts[index - 1] : undefined;
  const older = index < posts.length - 1 ? posts[index + 1] : undefined;

  return (
    <main className="mx-auto max-w-2xl px-6 pt-12">
      <p className="text-sm">
        <Link href="/writing" className="text-muted hover:text-accent">
          ← Writing
        </Link>
      </p>
      <header className="mt-8 border-b border-line pb-8">
        {post.tags.length > 0 ? (
          <p className="text-sm text-muted">
            {post.tags.map((tag, i) => (
              <span key={tag}>
                {i > 0 ? " · " : ""}
                <Link href={`/tags/${tag}`} className="hover:text-accent">
                  {tag}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {" · "}
          {post.readingMinutes} min read
        </p>
      </header>
      <article className="mt-8">
        <Markdown content={post.content} />
      </article>
      <nav className="mt-14 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
        {older ? (
          <Link href={`/posts/${older.slug}`} className="group">
            <span className="text-xs uppercase tracking-[0.18em] text-muted">
              Older
            </span>
            <span className="mt-1 block font-display text-xl leading-snug group-hover:text-accent">
              {older.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {newer ? (
          <Link href={`/posts/${newer.slug}`} className="group sm:text-right">
            <span className="text-xs uppercase tracking-[0.18em] text-muted">
              Newer
            </span>
            <span className="mt-1 block font-display text-xl leading-snug group-hover:text-accent">
              {newer.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
