var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var fs = require('fs');
var gulpmatch = require('gulp-match');
var map = require('map-stream');

gulp.task('watch', function () {
  gulp.watch('./stylus/*.styl', ['stylus']);
});

gulp.task('stylus', function() {
  gulp.src('stylus/*')
  .pipe(stylus())
  .pipe(gulp.dest('css/'));
});
