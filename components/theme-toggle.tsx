"use client";

import { useEffect, useState } from "react";

/**
 * Floating dark-mode toggle (bottom-right). Light is the default; the choice is
 * persisted to localStorage and applied pre-paint by the inline script in the
 * root layout, so there is no flash on reload.
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Sync initial state from the class the pre-paint script already set.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    // Read the live DOM state so the toggle stays correct even if React state
    // and the actual `.dark` class ever drift apart.
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore unavailable storage */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="fixed bottom-5 right-5 z-1000 flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-indigo-300 dark:border-white/10 dark:bg-[#141626] dark:text-gray-200"
    >
      {dark ? (
        // Sun
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        // Moon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
