import type { Metadata } from "next";
import { PostList } from "@/components/post-list";
import { getPosts, getTags } from "@/lib/posts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description: "Every essay published on Review.",
};

export default function WritingPage() {
  const posts = getPosts();
  const tags = getTags();

  return (
    <main className="mx-auto max-w-2xl px-6 pt-14">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">Archive</p>
      <h1 className="mt-3 font-display text-5xl tracking-tight">Writing</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        {posts.length} {posts.length === 1 ? "essay" : "essays"}, newest first.
      </p>
      {tags.length > 0 ? (
        <p className="mt-6 text-sm text-muted">
          {tags.map((tag, index) => (
            <span key={tag}>
              {index > 0 ? " · " : ""}
              <Link href={`/tags/${tag}`} className="hover:text-accent">
                {tag}
              </Link>
            </span>
          ))}
        </p>
      ) : null}
      <div className="mt-10">
        <PostList posts={posts} />
      </div>
    </main>
  );
}
