let gulp = require("gulp");
let sass = require("gulp-sass");
let ghPages = require("gulp-gh-pages");

gulp.task("sass", () => {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"));
});

gulp.task("watch", () => {
  gulp.watch("app/scss/**/*.scss", gulp.series("sass"));
});

gulp.task("deploy", function() {
  return gulp.src("./dist/**/*").pipe(ghPages());
});
