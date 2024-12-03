import gulp from 'gulp';
import concat from 'gulp-concat';

// Define the task
const concatenateFiles = () => {
  return gulp.src(['src/files/*.{js,json,css,html}']) // Match files with specified extensions
    .pipe(concat('all.js')) // Concatenate them into 'all.js'
    .pipe(gulp.dest('dest/files')); // Save to destination directory
};

// Export the task
export default concatenateFiles;
