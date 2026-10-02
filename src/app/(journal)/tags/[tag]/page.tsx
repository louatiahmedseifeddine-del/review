import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostList } from "@/components/post-list";
import { getPostsByTag, getTags } from "@/lib/posts";

export function generateStaticParams() {
  return getTags().map((tag) => ({ tag }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/tags/[tag]">,
): Promise<Metadata> {
  const { tag } = await props.params;
  return {
    title: tag,
    description: `Essays tagged ${tag}.`,
  };
}

export default async function TagPage(props: PageProps<"/tags/[tag]">) {
  const { tag } = await props.params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 pt-14">
      <p className="text-sm">
        <Link href="/writing" className="text-muted hover:text-accent">
          ← Writing
        </Link>
      </p>
      <p className="mt-8 text-xs uppercase tracking-[0.22em] text-muted">
        Tag
      </p>
      <h1 className="mt-3 font-display text-5xl tracking-tight">{tag}</h1>
      <p className="mt-4 text-lg text-muted">
        {posts.length} {posts.length === 1 ? "essay" : "essays"}
      </p>
      <div className="mt-10">
        <PostList posts={posts} />
      </div>
    </main>
  );
}
