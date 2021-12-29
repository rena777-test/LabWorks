const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function build(){
    return gulp.src('scss/*.scss').pipe(sass()).pipe(gulp.dest('scss/'));
  
}

function watch(){
    gulp.watch('scss/*.scss', build)
}

exports.default = build;