"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const revealNodes = document.querySelectorAll(".reveal, .stagger");
    revealNodes.forEach((node) => observer.observe(node));

    const onScroll = () => {
      const nav = document.querySelector(".nav-shell");
      if (!nav) {
        return;
      }

      if (window.scrollY > 60) {
        nav.classList.add("compact");
      } else {
        nav.classList.remove("compact");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
