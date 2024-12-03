import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export default const optimized () => (
	return gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
);