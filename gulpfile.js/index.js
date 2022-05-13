const { watch, series, parallel } = require("gulp");

const js = require("./task/js");
const img = require("./task/img");
const app = require("./config/app");
const html = require("./task/html");
const path = require("./config/path");
const scss = require("./task/scss");
const font = require("./task/font");
const clear = require("./task/clear");
const browserSync = require("browser-sync").create();

const server = () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: path.root,
    },
  });
};

const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
  watch(path.fonts.watch, font).on("all", browserSync.reload);
};

const build = series(clear, parallel(html, scss, js, img, font));
const dev = series(build, parallel(watcher, server));

exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.default = app.isProd ? build : dev;

