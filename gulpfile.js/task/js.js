const { src, dest } = require("gulp");

const app = require("../config/app");
const path = require("../config/path");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const webpackStream = require("webpack-stream");

const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(babel())
    .pipe(webpackStream(app.webpack))
    .pipe(concat("script.min.js"))
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};

module.exports = js;
