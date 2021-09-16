const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function buildStyles() {
  return src('src/sassStyles/**/*.scss')
    .pipe(sass())
    .pipe(dest('src'))
}

function watchTask() {
  watch(['src/sassStyles/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)