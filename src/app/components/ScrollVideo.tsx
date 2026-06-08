"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";

export default function ScrollVideo({
  children,
  scrollContent,
}: {
  children: ReactNode;
  scrollContent?: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const update = useCallback(() => {
    const container = containerRef.current;
    const scrollEl = scrollContentRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrolled = -rect.top;
    const totalScroll = containerHeight - windowHeight;
    const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

    if (scrollEl) {
      const show = progress > 0.05;
      scrollEl.style.opacity = show ? "1" : "0";
      scrollEl.style.transform = show ? "translateY(0)" : "translateY(20px)";
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Autoplay looping video — performant on all browsers */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-scroll-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {children}
          {scrollContent && (
            <div
              ref={scrollContentRef}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              {scrollContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
