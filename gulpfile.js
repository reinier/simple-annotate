var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var sassConfig = {
    loadPath: [
        'src/styles/'
    ]
};

var paths = {
  sass: 'src/styles/**/*.scss',
  javascript: 'src/javascript/**/*.js',
  images: 'src/images/**/*'
};

gulp.task('sass', function() {
	return gulp.src(paths.sass)
		.pipe(sass(sassConfig))
		.pipe(gulp.dest('./dist/styles'));
});

gulp.task('javascript', function() {
  return gulp.src(paths.javascript)
    .pipe(gulp.dest('./dist/javascript'));
});

gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.javascript, ['javascript']);
});

gulp.task('default', ['init','watch']);
gulp.task('init', ['javascript','sass','images']);
