document.documentElement.classList.add("has-js");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".main-nav a");

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  navToggle?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  document.querySelectorAll("[data-project-gallery]").forEach((gallery) => {
    const filterContainer = gallery.querySelector("[data-project-filters]");
    const cards = [...gallery.querySelectorAll("[data-project-card]")];
    const types = [...new Set(cards.map((card) => card.dataset.type).filter(Boolean))];

    if (!filterContainer || types.length < 2) return;

    ["Todos", ...types].forEach((type, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `filter-button${index === 0 ? " is-active" : ""}`;
      button.textContent = type;
      button.setAttribute("aria-pressed", String(index === 0));

      button.addEventListener("click", () => {
        filterContainer.querySelectorAll("button").forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });

        cards.forEach((card) => {
          card.hidden = type !== "Todos" && card.dataset.type !== type;
        });
      });

      filterContainer.appendChild(button);
    });
  });
});
