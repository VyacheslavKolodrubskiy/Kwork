const { src, dest } = require("gulp");

const app = require("../config/app");
const path = require("../config/path");
const htmlmin = require("gulp-htmlmin");
const fileinclude = require("gulp-file-include");
// const webpHtml = require("gulp-webp-html");

const html = () => {
  return (
    src(path.html.src)
      .pipe(fileinclude())
      // .pipe(webpHtml())
      .pipe(htmlmin(app.htmlmin))
      .pipe(dest(path.html.dest))
  );
};

module.exports = html;
