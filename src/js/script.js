import Glide from "@glidejs/glide";

("use strict");
document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
  }).mount();

  new Glide(".industrial-medicine__slider", {
    type: "carousel",
    startAt: 0,
    perView: 1,
  }).mount();
});

