var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var open = require('gulp-open');

/* start the web server and open a browser */
gulp.task('startdev', function() {
  gulp.src('./app/index.html')
    .pipe(open('', {
      url: 'http://localhost:9000',
      app: 'chrome'
    }));
});

/* force live reload to refresh browser */
gulp.task('force-reload', function() {
  gulp.src('./**/*.html')
    .pipe(livereload());
});

/* start watching files to trigger a reload */
gulp.task('watch', function() {
  connect.server({
    port: 9000,
    root: 'app/'
  });
  livereload.listen({
    quiet: false
  });
  gulp.watch([
    './**/*.js', //all js files
    './**/*.css', //all css files
    './**/*.html', //all html files
  ], ['force-reload']);
});

gulp.task('default', ['watch', 'startdev']);
