import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-20">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">404</p>
      <h1 className="mt-3 font-display text-5xl tracking-tight">
        This page is not in the journal.
      </h1>
      <p className="mt-4 text-lg text-muted">
        The essay may have moved, or the address is off by a letter.
      </p>
      <p className="mt-8">
        <Link href="/journal" className="text-accent underline underline-offset-4">
          Back to the index
        </Link>
      </p>
    </main>
  );
}
