/*jslint node: true */ // allow 'require' global
"use strict";

// dependencies
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  del = require('del'),
  gulpFilter = require('gulp-filter'),
  gulpUtil = require('gulp-util'),
  es = require('event-stream'),
  inject = require('gulp-inject'),
  ts = require('gulp-typescript');

// paths
var sources = {
  app: {
    ts: ['./src/**/*.ts'],
  }
};

var destinations = {
  js: './dist/'
};

// Note has DefinitelyTyped support already, but not used
gulp.task('js:app', function() {
  var tsStream = gulp.src(sources.app.ts)
    .pipe(ts({
      declarationFiles: false,
      noExternalResolve: true
    }));

  es.merge(
    tsStream.dts.pipe(gulp.dest(destinations.js)),
    tsStream.js
    .pipe(concat('main.js'))
    .pipe(gulp.dest(destinations.js))
  );
});


// deletes the dist folder for a clean build
gulp.task('clean', function() {
  del(['./dist'], function(err, deletedFiles) {
    if(deletedFiles.length) {
      gulpUtil.log('Deleted', gulpUtil.colors.red(deletedFiles.join(' ,')) );
    } else {
      gulpUtil.log(gulpUtil.colors.yellow('/dist directory empty - nothing to delete'));
    }
  });
});

gulp.task('build', [
  'js:app'
]);

// watch scripts, styles, and templates
gulp.task('watch', function() {
  gulp.watch(sources.app.ts, ['js:app']);
});

// default
gulp.task('default', ['build', 'watch']);
