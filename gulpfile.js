const gulp = require("gulp");
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const watchify = require("watchify");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const buffer = require("vinyl-buffer");
const tsify = require("tsify");
const gutil = require("gulp-util");
const paths = {
    pages: ['src/*.html']
};

const watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
})
    .plugin(tsify));

function copyhtml(){
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
}

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

function defaultfunc(){
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
}

let hello = gulp.series(defaultfunc, copyhtml, bundle);

gulp.task("default", hello);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
