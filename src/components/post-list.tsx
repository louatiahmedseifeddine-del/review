import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-muted">Nothing here yet.</p>;
  }

  return (
    <ul className="divide-y divide-line border-y border-line">
      {posts.map((post) => (
        <li key={post.slug}>
          <article className="grid gap-2 py-6 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
            <time
              dateTime={post.date}
              className="pt-1 text-sm text-muted"
            >
              {formatDate(post.date)}
            </time>
            <div>
              <h2 className="font-display text-2xl leading-snug tracking-tight">
                <Link href={`/posts/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-[1.05rem] leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <p className="mt-3 text-sm text-muted">
                {post.readingMinutes} min
                {post.tags.length > 0 ? " · " : ""}
                {post.tags.map((tag, index) => (
                  <span key={tag}>
                    {index > 0 ? ", " : ""}
                    <Link href={`/tags/${tag}`} className="hover:text-accent">
                      {tag}
                    </Link>
                  </span>
                ))}
              </p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
