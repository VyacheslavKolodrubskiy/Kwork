import Glide from "@glidejs/glide";

("use strict");
document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", { type: "carousel", startAt: 0, perView: 1 }).mount();

  const submenuTriggers = document.querySelectorAll("[data-submenu-trigger]");

  const classes = [
    "submenu",
    "submenu__inner",
    "submenu__list",
    "submenu__box",
    "submenu__item",
    "submenu__link",
  ];

  window.addEventListener("mousemove", (e) => {
    submenuTriggers[0].classList.toggle(
      "menu__list-link--active",
      e.target.className.includes(...classes)
    );
  });
});

