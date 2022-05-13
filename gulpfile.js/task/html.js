const { src, dest } = require("gulp");

const path = require("../config/path");
const fileinclude = require("gulp-file-include");

const html = () => {
  return src(path.htmlPages.src)
    .pipe(fileinclude())
    .pipe(dest(path.htmlPages.dest))
    .pipe(src(path.html.src))
    .pipe(fileinclude())
    .pipe(dest(path.html.dest));
};

module.exports = html;

