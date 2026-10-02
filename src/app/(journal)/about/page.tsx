import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Who writes Review.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-14">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">About</p>
      <h1 className="mt-3 font-display text-5xl tracking-tight">
        A place to look twice.
      </h1>
      <div className="article mt-8">
        <p>
          Review is a small journal by ahmedseifeddine, a software engineer who
          writes in order to notice what a book, a tool, or a week of work
          actually did.
        </p>
        <p>
          The essays stay short. The point is not a verdict. It is a record
          made while the details are still slightly inconvenient — before
          memory tidies them into a take.
        </p>
        <p>
          New pieces live as markdown in <code>content/posts</code>. Drop a
          file in, give it a title and a date, and it shows up on the index.
        </p>
      </div>
    </main>
  );
}
