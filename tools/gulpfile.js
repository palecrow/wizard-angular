'use strict';

var del         = require('del');
var gulp        = require('gulp');
var inject      = require('gulp-inject');
var jshint      = require('gulp-jshint');
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');


var root = '../';

var paths = {
  root: root,
  client: root + 'client-side/',
  server: root + 'server-side/'
};

var jsSourceFiles = [
  paths.client + 'index.js',
  paths.client + 'framework/**/*.module.js',
  paths.client + 'framework/**/*.js',
  paths.client + 'app/**/*.module.js',
  paths.client + 'app/**/*.js',
  '!' + paths.client + '**/*.spec.js',
  '!' + paths.client + '**/*.test.js',
  '!' + paths.client + 'lib/**/*.js'
];

gulp.task('lint', function () {
  return gulp.src(jsSourceFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function () {
  return gulp.src([paths.client + '**/*.scss'], { base: './' })
    .pipe(sass())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(paths.client + '**/*.js', ['lint']);
  gulp.watch(paths.client + '**/*.scss', ['sass']);
  gulp.watch(paths.client + '_index.html', ['index']);
});

gulp.task('clean', function (callback) {
  del([paths.client + '**/*.css', '!' + paths.client + 'lib/**/*.css'], {
    force: true
  }, callback);
});

gulp.task('index', function () {
  var target = gulp.src(paths.client + '_index.html');
  var sources = gulp.src(jsSourceFiles, { read: false });

  return target.pipe(inject(sources, { relative: true }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(paths.client));
});

/**
 * Execute this task after adding/deleting CSS/JavaScript files,
 * `watch` does not watch for adding/deleting files.
 */
gulp.task('build', function (callback) {
  runSequence('clean', ['lint', 'sass'], 'index', 'watch', callback);
});

gulp.task('default', function (callback) {
  runSequence('clean', ['lint', 'sass'], 'index', callback);
});
