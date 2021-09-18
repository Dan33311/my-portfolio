const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['src/**/*.html', 'src/**/*.js']}))
    .pipe(dest('src'))
}

function watchTask() {
  watch(['src/sass/**/*.scss', 'src/**/*.js'], buildStyles)
}

exports.default = series(buildStyles, watchTask)


// function buildStyles() {
//   return src('src/sassStyles/**/*.scss')
//     .pipe(sass())
//     .pipe(purgecss({ content: ['src/**/*.html', 'src/**/*.js']}))
//     .pipe(dest('src'))
// }

// function watchTask() {
//   watch(['src/sassStyles/**/*.scss', 'src/**/*.js'], buildStyles)
// }