import { useEffect } from "react";

/**
 * Observes every element carrying `data-reveal` in the document and adds
 * `.is-visible` once it scrolls into view (see the `.reveal` utility in
 * index.css). Mount once near the root — new elements added later (e.g. by
 * client-side state changes) are picked up via a MutationObserver.
 */
export function useGlobalReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (!el.classList.contains("is-visible")) io.observe(el);
      });
    };

    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
