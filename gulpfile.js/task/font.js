const { src, dest } = require("gulp");

const path = require("../config/path");

const font = () => {
  return src(path.fonts.src).pipe(dest(path.fonts.dest));
};

module.exports = font;
