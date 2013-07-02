module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      combine: {
        files: {
          'public/css/output.css': ['public/css/bootstrap.min.css', 'public/css/bootstrap-responsive.min.css', 'public/less/style.css']
        }
      },
      minify: {
        expand: true,
        cwd: 'public/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'public/css/',
        ext: '.min.css'
      }
    },
    uglify: {
      my_target: {
        files: {
          'public/js/output.min.js': ['public/js/bootstrap.min.js', 'public/js/script.js']
        }
      }
    }
  });

  // Load the plugin that provides the "cssmin" task
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Load the plugin that provides the "uglify" task
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'uglify']);

};