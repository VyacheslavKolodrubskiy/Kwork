const pathSrc = "./src";
const pathDest = "./dist";

module.exports = {
  root: pathDest,
  html: {
    src: `${pathSrc}/index.html`,
    watch: `${pathSrc}/**/*.html`,
    dest: pathDest,
  },
  scss: {
    src: `${pathSrc}/scss/style.scss`,
    watch: `${pathSrc}/scss/**/*.scss`,
    dest: `${pathDest}/css`,
  },
  js: {
    src: `${pathSrc}/js/script.js`,
    watch: `${pathSrc}/js/**/*.js`,
    dest: `${pathDest}/js`,
  },
  img: {
    src: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`,
    watch: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`,
    dest: `${pathDest}/img`,
  },
  fonts: {
    src: `${pathSrc}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
    watch: `${pathSrc}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
    dest: `${pathDest}/fonts`,
  },
};
