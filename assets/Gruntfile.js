module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
          compileCore: {
            src: 'less/mainstyle.less',
            dest: 'css/mainstyle.css'
          }
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['*.css', '!*.min.css'],
              dest: 'css',
              ext: '.min.css'
            }]
          }
        },

        usebanner: {
          options: {
            position: 'top',
            banner: '/*!\n' +
            ' * Selaksa v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
            linebreak: true
          },
          files: {
            src: 'css/*.css'
          }
        },

        watch: {
            update: {
                  files: ['less/*.less'],
                  tasks: ['less', 'cssmin', 'usebanner'],
                  options: {
                        spawn: false
                  }
            }
        }
    });

    // Load the plugin.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-banner');

    // Default task(s).
    grunt.registerTask('default', ['less', 'cssmin', 'usebanner', 'watch']);

};