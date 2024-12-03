import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// Define the task

const optimizeImages = () => {
  return gulp.src('src/images/**/*') // Match all images including in subdirectories
    .pipe(imagemin()) // Optimize images
    .pipe(gulp.dest('dist/images')); // Output to destination folder
};

// Export the task
export default optimizeImages;
