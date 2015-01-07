'use strict';

var del       = require('del');
var gulp      = require('gulp');
var jshint    = require('gulp-jshint');
var sass      = require('gulp-sass');

var root = '../';

var paths = {
  root: root,
  client: root + 'client-side/',
  server: root + 'server-side/'
};

gulp.task('lint', function () {
  return gulp.src([paths.client + 'app/**/*.js', paths.client + 'framework/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function () {
  return gulp.src([paths.client + '**/*.scss'], {base: './'})
    .pipe(sass())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(paths.client + '**/*.js', ['lint']);
  gulp.watch(paths.client + '**/*.scss', ['sass']);
});

gulp.task('clean', function (callback) {
  del([paths.client + '**/*.css', '!' + paths.client + 'lib/**/*.css'], {
    force: true
  }, callback);
});

gulp.task('default', ['lint', 'sass', 'watch']);