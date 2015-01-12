var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

gulp.task('compress', function() {
  gulp.src('./js/**/*.js')
    .pipe(plumber())
    .pipe(concat('game.js'))
    .pipe(gulp.dest('build'))
    .pipe(uglify())
    .pipe(gulp.dest('build/game.min.js'))
});


gulp.task('watch', function () {
  gulp.watch('./stylus/*.styl', ['stylus']);
  gulp.watch('./js/**/*.js', ['compress']);
})

gulp.task('stylus', function() {
  gulp.src('stylus/*')
  .pipe(plumber())
  .pipe(stylus())
  .pipe(gulp.dest('css/'));
});



