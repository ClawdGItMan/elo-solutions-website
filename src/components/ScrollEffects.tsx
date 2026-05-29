"use client";

import { useEffect } from "react";

/**
 * Ports the prototype's vanilla page script:
 *  - tints/blurs the nav once scrolled past 24px
 *  - reveals .reveal / .reveal-stagger elements on scroll (position-based, with
 *    a "settled" fallback so content can never stay trapped hidden)
 *  - tracks the active nav link as sections cross the viewport mid-line
 * Respects prefers-reduced-motion. Renders nothing.
 */
export function ScrollEffects() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () =>
      nav?.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const revealEls = [
      ...document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger"),
    ];

    let cleanupReveal: (() => void) | undefined;

    if (reduce) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      const show = (el: HTMLElement) => {
        if (el.classList.contains("in")) return;
        if (el.classList.contains("reveal-stagger")) {
          [...el.children].forEach((c, i) => {
            (c as HTMLElement).style.transitionDelay = `${i * 70}ms`;
          });
        }
        el.classList.add("in");
        // settle fallback: guarantee final state even if a throttled tab
        // never paints the transition
        window.setTimeout(() => el.classList.add("settled"), 900);
      };

      let ticking = false;
      const check = () => {
        ticking = false;
        const trigger = window.innerHeight * 0.92;
        for (const el of revealEls) {
          if (el.classList.contains("in")) continue;
          if (el.getBoundingClientRect().top < trigger) show(el);
        }
      };
      const onScrollReveal = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(check);
        }
      };

      window.addEventListener("scroll", onScrollReveal, { passive: true });
      window.addEventListener("resize", onScrollReveal, { passive: true });
      // initial passes (cover late layout / font load)
      requestAnimationFrame(check);
      window.addEventListener("load", check);
      const settleTimer = window.setTimeout(check, 350);

      cleanupReveal = () => {
        window.removeEventListener("scroll", onScrollReveal);
        window.removeEventListener("resize", onScrollReveal);
        window.removeEventListener("load", check);
        window.clearTimeout(settleTimer);
      };
    }

    // active nav link as sections pass the viewport mid-line
    const sections = ["work", "process", "about"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const links = new Map(
      [
        ...document.querySelectorAll<HTMLAnchorElement>(".nav__links a.navlink"),
      ].map((a) => [a.getAttribute("href")!.slice(1), a])
    );
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const a = links.get(e.target.id);
          if (a) a.style.color = e.isIntersecting ? "var(--ink)" : "";
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      cleanupReveal?.();
      spy.disconnect();
    };
  }, []);

  return null;
}
