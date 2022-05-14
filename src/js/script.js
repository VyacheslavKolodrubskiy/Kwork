import Glide from "@glidejs/glide";

("use strict");
document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
  }).mount();

  new Glide(".industrial__slider", {
    type: "carousel",
    startAt: 0,
    perView: 3,
  }).mount();
});

