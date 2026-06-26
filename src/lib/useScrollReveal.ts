"use client";
import { useEffect } from "react";

/**
 * Activates the `.reveal` → `.reveal.visible` CSS transition pattern
 * (defined in globals.css) using IntersectionObserver.
 * Native browser API only — no animation libraries, satisfies the
 * zero-runtime-animation-engine constraint.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
