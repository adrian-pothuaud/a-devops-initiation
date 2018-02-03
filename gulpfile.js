var gulp = require('gulp');

gulp.task('one', function(done) {
  // do stuff
  console.log("Moving last report to public repo");
  gulp
    .src("mochawesome-report/**.*")
    .pipe(gulp.dest('public/mochawesome-report/'));
  gulp
    .src("mochawesome-report/assets/**.*")
    .pipe(gulp.dest('public/mochawesome-report/assets/'));
  done();
});

gulp.task('two', function(done) {
  // do stuff
  done();
});

gulp.task('default', ['one', 'two']);