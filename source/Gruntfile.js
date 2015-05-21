module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		mustache_html: {
			templating_html: {
				options: {
					src: 'template',
					dist: '../dist',
					type: 'mustache'
				}
			}
		},

		less: {
			compile_less: {
				src: 'less/mainstyle.less',
				dest: '../dist/assets/css/mainstyle.css'
			}
		},

		cssmin: {
			minify_css: {
				expand: true,
				cwd: '../dist/assets/css',
				src: ['*.css', '!*.min.css'],
				dest: '../dist/assets/css',
				ext: '.min.css'
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
			create_banner: {
				src: '../dist/assets/css/*.css'
			}
		},

		watch: {
			sync: {
				files: ['**/*.mustache', '**/*.json', '**/*.less', '**/*.js'],
				tasks: ['mustache_html', 'less', 'cssmin', 'usebanner'],
				options: {
					spawn: false
				}
			}
		}

	});


	// Load the plugin.
	grunt.loadNpmTasks('grunt-mustache-html');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-watch');



	// Default task(s).
	grunt.registerTask('default', ['mustache_html', 'less', 'cssmin', 'usebanner', 'watch']);

};