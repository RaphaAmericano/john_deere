'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

function scss() {
    //return gulp.src('./sass/**/*.scss')
    return gulp.src('./scss/style.scss')
      .pipe(sass({
        includePaths: [
          'node_modules',
          '/node_modules/bootstrap/scss']
      }).on('error', sass.logError))
      .pipe(concat('style.css'))
      // .pipe(cleanCss())
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream())
};

gulp.task('bootstrap-js', function() {
    return gulp.src(['./node_modules/jquery/dist/jquery.slim.min.js','./node_modules/popper.js/dist/popper.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js' ])
        .pipe(gulp.dest('./js'))
});

gulp.task('browserSync', function(){
    browserSync.init(['*.html','css/*.css', 'scss/*.scss'],{
      server: {
        baseDir: './',
        index: 'index.html'
      }
    });
    gulp.watch('./scss/*.scss', scss)
    gulp.watch('./scss/*.scss').on('change', browserSync.reload)
});