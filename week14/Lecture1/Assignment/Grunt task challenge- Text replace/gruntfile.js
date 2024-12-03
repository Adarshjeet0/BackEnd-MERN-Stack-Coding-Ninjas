// module.exports = function (grunt) {
//     // Load the replace plugin
//     grunt.loadNpmTasks('grunt-replace');
  
//     // Project configuration
//     grunt.initConfig({
//       replace: {
//         updateLinks: {
//           options: {
//             patterns: [
//               {
//                 match: /ninjacoding\.com/g, // Regular expression to match 'ninjacoding.com'
//                 replacement: 'codingninjas.com', // Replacement text
//               },
//             ],
//           },
//           files: [
//             {
//               expand: true, // Enable dynamic expansion
//               cwd: 'src/', // Source directory
//               src: ['index.html'], // File to process
//               dest: 'build/', // Destination directory
//             },
//           ],
//         },
//       },
//     });
  
//     // Register the default task
//     grunt.registerTask('default', ['replace']);
//   };
  

module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    replace: {
      example: {
        options: {
          patterns: [
            {
              match: 'placeholder',
              replacement: 'real-value'
            },
            {
              match: /ninjacoding\.com/g,
              replacement: 'codingninjas.com',
            }
          ]
        },
        files: [
          {
            expand: true, // Enable dynamic expansion
            cwd: 'src/', // Source directory
            src: ['index.html'], // File to process
            dest: 'build/', // Destination directory
          },
        ],
      }
    }
  });

  // Load grunt-replace
  grunt.loadNpmTasks('grunt-replace');

  // Register default tasks
  grunt.registerTask('default', ['replace']);
};
