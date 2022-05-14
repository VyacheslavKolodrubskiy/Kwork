const { src, dest } = require("gulp");

const app = require("../config/app");
const path = require("../config/path");
// const webp = require("gulp-webp");
const newer = require("gulp-newer");
const gulpIf = require("gulp-if");
const imagemin = require("gulp-imagemin");

const img = () => {
  return (
    src(path.img.src)
      .pipe(newer(path.img.dest))
      // .pipe(webp())
      .pipe(dest(path.img.dest))
      .pipe(src(path.img.src))
      .pipe(newer(path.img.dest))
      .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
      .pipe(dest(path.img.dest))
  );
};

module.exports = img;

