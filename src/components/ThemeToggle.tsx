"use client";

import { useSyncExternalStore } from "react";

type Mode = "system" | "light" | "dark";
const ORDER: Mode[] = ["system", "light", "dark"];
const LABEL: Record<Mode, string> = { system: "Auto", light: "Light", dark: "Dark" };

const listeners = new Set<() => void>();

function read(): Mode {
  try {
    const v = localStorage.getItem("theme");
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    return "system";
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

export function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, read, () => "system" as Mode);
  const next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];

  function apply() {
    const root = document.documentElement;
    try {
      if (next === "system") {
        localStorage.removeItem("theme");
        delete root.dataset.theme;
      } else {
        localStorage.setItem("theme", next);
        root.dataset.theme = next;
      }
    } catch {
      if (next === "system") delete root.dataset.theme;
      else root.dataset.theme = next;
    }
    listeners.forEach((l) => l());
  }

  return (
    <button
      type="button"
      onClick={apply}
      aria-label={`Theme: ${LABEL[mode].toLowerCase()}. Switch to ${LABEL[next].toLowerCase()}.`}
      className="min-w-12 rounded-full border border-panel-ink/30 px-2.5 py-1 text-sm text-panel-ink/80 hover:border-panel-ink hover:text-panel-ink"
    >
      {LABEL[mode]}
    </button>
  );
}
