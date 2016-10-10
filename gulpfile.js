"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var server = require("browser-sync").create();
var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest("css"))
    .pipe(minify())
    .pipe(server.stream())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task("images", function() {
  return gulp.src("img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizaionLevel: 3}),
      imagemin.jpegtran({progressive: ture})
    ]))
    .pipe(gulp.dest("img"));
});

gulp.task("symbols", function() {
    return gulp.src("img/icons/*.svg")
      .pipe(svgmin())
      .pipe(svgstore({
        inlineSvg: true
      }))
      .pipe(rename("symbols.svg"))
      .pipe(gulp.dest("img"));
});

gulp.task("build", function(fn) {
  run("style", "images", "symbols", fn);
});
