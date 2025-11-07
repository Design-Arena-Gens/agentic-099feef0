import Link from "next/link";
import { InteractiveHello } from "@/components/InteractiveHello";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-200 px-6 py-16 font-sans text-zinc-900 dark:from-black dark:via-zinc-950 dark:to-zinc-900 dark:text-zinc-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,29,149,0.08),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(13,148,136,0.08),_transparent_40%)]" />
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-12">
        <header className="flex flex-col gap-6">
          <span className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
            Hi, friend
          </span>
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
            Sometimes you just need a soft hello.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Tap through a collection of small, delightful greetings gathered from around
            the world. Let the moment set the tone, take a breath, and share the vibe
            with someone you appreciate.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="rounded-full border border-zinc-300/70 px-3 py-1 dark:border-zinc-700">
              Real-time companion
            </span>
            <span className="rounded-full border border-zinc-300/70 px-3 py-1 dark:border-zinc-700">
              Multilingual greetings
            </span>
            <span className="rounded-full border border-zinc-300/70 px-3 py-1 dark:border-zinc-700">
              Shareable inspiration
            </span>
          </div>
        </header>
        <InteractiveHello />
        <footer className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Have a greeting we should add? Drop a note{" "}
            <Link
              href="mailto:hello@example.com"
              className="font-medium text-zinc-900 underline-offset-4 transition hover:underline dark:text-zinc-100"
            >
              here
            </Link>{" "}
            and we&apos;ll keep the hellos flowing.
          </p>
          <p>Crafted with care, wherever you&apos;re reading this from.</p>
        </footer>
      </main>
    </div>
  );
}
