'use strict';

const { src, dest, watch, series, parallel } = require('gulp');

const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

const srcDir = './src/';
const buildDir = './dist/';

const path = {
  src: {
    html: srcDir + '*.html',
    scss: srcDir + 'scss/index.scss',
    js: srcDir + 'js/**/*.js',
    images: srcDir + 'images/**/*.*',
    fonts: srcDir + 'fonts/**/*.*',
  },
  build: {
    html: buildDir,
    css: buildDir,
    js: buildDir,
    images: buildDir + 'images/',
    svg: buildDir + 'svg/',
    fonts: buildDir + 'fonts/',
  },
  clean: buildDir + '**/*.*',
  watchScss: srcDir + 'scss/*.scss',
};

function server() {
  browserSync.init({
    server: {
      baseDir: './dist/',
    },
  });
}

function html() {
  return src(path.src.html).pipe(plumber()).pipe(dest(path.build.html));
}

function css() {
  return src(path.src.scss)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('style'))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min', extname: '.css' }))
    .pipe(dest(path.build.css));
}

function js() {
  return src(path.src.js)
    .pipe(plumber())
    .pipe(concat('index'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min', extname: '.js' }))
    .pipe(dest(path.build.js));
}

function image() {
  return src(path.src.images)
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(dest(path.build.images));
}

function fonts() {
  return src(path.src.fonts).pipe(dest(path.build.fonts));
}

function deleteFiles() {
  return src(path.clean, { read: false }).pipe(clean());
}

function watchFiles() {
  watch([path.src.html], html).on('change', browserSync.reload);
  watch([path.src.js], js).on('change', browserSync.reload);
  watch([path.watchScss], css).on('change', browserSync.reload);
  watch([path.src.images], image).on('change', browserSync.reload);
  watch([path.src.fonts], fonts).on('change', browserSync.reload);
}

const build = series(deleteFiles, parallel(html, css, js, image, fonts));
const startGulp = series(build, parallel(server, watchFiles));

exports.server = server;
exports.deleteFiles = deleteFiles;
exports.html = html;
exports.css = css;
exports.js = js;
exports.fonts = fonts;
exports.image = image;
exports.build = build;
exports.default = startGulp;
