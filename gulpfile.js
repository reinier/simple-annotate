var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');

var sassConfig = {
    loadPath: [
        'src/styles/'
    ]
};

var paths = {
  sass: 'src/styles/**/*.scss',
  javascript: 'src/javascript/**/*.js',
  images: 'src/images/**/*',
  jquery: 'bower_components/jquery/dist/jquery.min.js'
};

gulp.task('sass', function() {
	return gulp.src(paths.sass)
		.pipe(sass(sassConfig))
    .pipe(gulp.dest('./dist/styles'))
		.pipe(gulp.dest('./example/styles'));
});

gulp.task('javascript', function() {
  return gulp.src(paths.javascript)
    .pipe(gulp.dest('./dist/javascript'))
    .pipe(gulp.dest('./example/javascript'));
});

gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest('./dist/images'))
    .pipe(gulp.dest('./example/images'));
});

gulp.task('bowerfiles', function() {
  gulp.src(paths.jquery)
  .pipe(gulp.dest('./example/javascript'));
});

gulp.task('connect', connect.server({
  root: ['example']
}));

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.javascript, ['javascript']);
});

gulp.task('default', ['init','watch','connect']);
gulp.task('init', ['javascript','sass','images','bowerfiles']);
