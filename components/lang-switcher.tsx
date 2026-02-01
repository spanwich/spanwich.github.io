"use client";

import { useLang } from "@/context/lang-context";

export default function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "th" : "en")}
      className="rounded-md border border-light-700 px-3 py-1 text-sm font-medium transition-colors hover:bg-light-800 dark:border-dark-400 dark:hover:bg-dark-300"
    >
      {lang === "en" ? "TH" : "EN"}
    </button>
  );
}
