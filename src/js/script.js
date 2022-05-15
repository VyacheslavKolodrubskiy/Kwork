import Glide from "@glidejs/glide";

("use strict");
document.addEventListener("DOMContentLoaded", () => {
  function defineSlider(selector, config = {}) {
    if (!document.querySelector(selector)) return;
    new Glide(selector, config).mount();
  }

  defineSlider(".intro__slider");
  defineSlider(".industrial-medicine__slider", {
    type: "carousel",
    perView: 4,
    autoplay: 2000,
  });
});

