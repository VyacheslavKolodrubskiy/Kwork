const { src, dest } = require("gulp");

const app = require("../config/app");
const path = require("../config/path");
const csso = require("gulp-csso");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const webpCss = require("gulp-webp-css");
const sassGlob = require("gulp-sass-glob");
const autoPrefixer = require("gulp-autoprefixer");
const gulpGroupCssMediaQueries = require("gulp-group-css-media-queries");

const scss = () => {
  return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoPrefixer())
    .pipe(gulpGroupCssMediaQueries())
    .pipe(csso())
    .pipe(concat("style.min.css"))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }));
};

module.exports = scss;
