'use client';

import { useEffect, useMemo, useState } from "react";

type Greeting = {
  phrase: string;
  language: string;
  note: string;
};

const GREETINGS: Greeting[] = [
  { phrase: "Hi there!", language: "English", note: "A friendly hello for any moment." },
  { phrase: "Hola!", language: "Spanish", note: "Sunshine and warmth from the south." },
  { phrase: "Salut!", language: "French", note: "A playful greeting from Parisian cafés." },
  { phrase: "Kia ora!", language: "Māori", note: "A welcome rooted in community and respect." },
  { phrase: "Cześć!", language: "Polish", note: "A cheerful wave from Central Europe." },
  { phrase: "Yáʼátʼééh!", language: "Navajo", note: "A greeting that wishes goodness." },
  { phrase: "Hej!", language: "Swedish", note: "Minimalist and bright, like a Scandinavian home." },
  { phrase: "Wassup!", language: "Slang", note: "Casual energy, ready for anything." },
];

export function InteractiveHello() {
  const [index, setIndex] = useState(0);
  const [now, setNow] = useState(() => new Date());
  const [pressCount, setPressCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = useMemo(
    () =>
      now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      }),
    [now]
  );

  const formattedDate = useMemo(
    () =>
      now.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    [now]
  );

  const greeting = GREETINGS[index];

  const handleShuffle = () => {
    setPressCount((count) => count + 1);
    setIndex((current) => {
      const next = Math.floor(Math.random() * GREETINGS.length);
      if (next === current) {
        return (current + 1) % GREETINGS.length;
      }
      return next;
    });
  };

  return (
    <section className="relative flex w-full flex-col gap-6 overflow-hidden rounded-3xl border border-zinc-900/10 bg-white/70 p-8 text-left shadow-xl backdrop-blur dark:border-zinc-50/10 dark:bg-black/50">
      <span className="text-xs uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
        Your personal hello
      </span>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{formattedDate}</p>
        <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">{formattedTime}</p>
      </div>
      <div className="space-y-3">
        <h2 className="text-5xl font-semibold tracking-tight text-zinc-900 drop-shadow-sm dark:text-zinc-50">
          {greeting.phrase}
        </h2>
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          {greeting.language}
        </p>
        <p className="max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          {greeting.note}
        </p>
      </div>
      <button
        type="button"
        onClick={handleShuffle}
        className="group relative flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-50 transition-colors hover:bg-zinc-700 active:bg-zinc-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Shuffle greeting
        <span className="rounded-full bg-zinc-50/10 px-2 py-1 text-xs text-zinc-200 transition group-hover:bg-zinc-50/20 dark:bg-zinc-900/40 dark:text-zinc-700 dark:group-hover:bg-zinc-900/30">
          #{pressCount}
        </span>
      </button>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 right-0 h-48 w-48 rounded-full bg-gradient-to-br from-pink-300/30 via-purple-300/40 to-indigo-400/30 blur-3xl dark:from-pink-500/20 dark:via-purple-500/20 dark:to-indigo-500/20" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-gradient-to-tr from-cyan-200/30 via-sky-200/40 to-blue-300/30 blur-3xl dark:from-cyan-400/20 dark:via-sky-400/20 dark:to-blue-500/20" />
      </div>
    </section>
  );
}
