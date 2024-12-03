import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// Define the task
gulp.task('default', () => {
    return gulp.src('src/images/**/*') // Match all images including in subdirectories
      .pipe(imagemin()) // Optimize images
      .pipe(gulp.dest('dist/images')); // Output to destination folder
  };)
const optimizeImages = 

// Export the task
export default optimizeImages;
