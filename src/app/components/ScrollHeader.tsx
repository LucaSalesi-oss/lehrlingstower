"use client";

import type { ReactNode } from "react";

export default function ScrollHeader({ children }: { children: ReactNode }) {
  return (
    <header
      data-scrolled="true"
      className="fixed top-0 w-full z-50 border-b"
      style={{
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(226,232,240,1)",
      }}
    >
      <style>{`
        nav a { color: #334155 !important; }
        nav a:hover { color: #0d9488 !important; }
        .logo-light { display: none !important; }
        .logo-dark { display: block !important; }
        .hamburger-btn { color: #334155 !important; }
      `}</style>
      {children}
    </header>
  );
}
