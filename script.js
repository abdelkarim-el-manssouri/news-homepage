const primaryHeader = document.querySelector(".header");
const navOpen = document.querySelector(".mobile-nav-open");
const navClose = document.querySelector(".mobile-nav-close");
const primaryNav = document.querySelector(".primary-navigation");

navOpen.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navOpen.setAttribute("aria-expanded", false)
    : navOpen.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

navClose.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navClose.setAttribute("aria-expanded", true)
    : navClose.setAttribute("aria-expanded", false);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
