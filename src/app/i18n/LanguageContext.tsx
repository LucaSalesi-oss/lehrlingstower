"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "de" | "fr" | "it";

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "de",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved && ["de", "fr", "it"].includes(saved)) setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
