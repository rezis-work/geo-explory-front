"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        autoComplete="email"
        disabled={done}
        className="min-w-0 flex-1 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none ring-red-600/20 focus:ring-2"
      />
      <button
        type="submit"
        disabled={done}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm transition-colors hover:bg-red-700 disabled:opacity-70"
        aria-label={done ? "Subscribed" : "Subscribe to newsletter"}
      >
        {done ? (
          <span className="text-lg" aria-hidden>
            ✓
          </span>
        ) : (
          <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
            <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        )}
      </button>
    </form>
  );
}
