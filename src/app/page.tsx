import Link from "next/link";
import { PostList } from "@/components/post-list";
import { formatDate, getPosts } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const recent = featured
    ? posts.filter((post) => post.slug !== featured.slug)
    : [];

  return (
    <main className="mx-auto max-w-2xl px-6">
      <section className="border-b border-line pb-12 pt-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          A reading journal
        </p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Notes worth keeping.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Short essays on software, attention, and the work of looking twice.
          Written by ahmedseifeddine.
        </p>
      </section>

      {featured ? (
        <section className="border-b border-line py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            Featured
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight">
            <Link href={`/posts/${featured.slug}`} className="hover:text-accent">
              {featured.title}
            </Link>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {featured.excerpt}
          </p>
          <p className="mt-4 text-sm text-muted">
            <time dateTime={featured.date}>{formatDate(featured.date)}</time>
            {" · "}
            {featured.readingMinutes} min read
          </p>
        </section>
      ) : (
        <section className="py-12">
          <p className="text-muted">
            The first essay is still on its way. Add a markdown file in{" "}
            <code className="bg-paper-deep px-1">content/posts</code>.
          </p>
        </section>
      )}

      {recent.length > 0 ? (
        <section className="pt-12">
          <h2 className="mb-6 font-display text-sm uppercase tracking-[0.22em] text-muted">
            Recent
          </h2>
          <PostList posts={recent} />
        </section>
      ) : null}
    </main>
  );
}
