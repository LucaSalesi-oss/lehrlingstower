"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function ScrollHeader({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className="fixed top-0 w-full z-50 border-b transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.3)",
        backdropFilter: "blur(12px)",
        borderColor: scrolled ? "rgba(226,232,240,1)" : "rgba(255,255,255,0.1)",
      }}
    >
      <style>{`
        [data-scrolled="true"] nav a { color: #334155 !important; }
        [data-scrolled="true"] nav a:hover { color: #0d9488 !important; }
        [data-scrolled="true"] .logo-light { display: none !important; }
        [data-scrolled="true"] .logo-dark { display: block !important; }
        [data-scrolled="false"] .logo-light { display: block !important; }
        [data-scrolled="false"] .logo-dark { display: none !important; }
        [data-scrolled="true"] .hamburger-btn { color: #334155 !important; }
        [data-scrolled="false"] .hamburger-btn { color: white !important; }
      `}</style>
      {children}
    </header>
  );
}
