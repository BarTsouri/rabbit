module.exports = function(grunt){
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'stylesheets/app.css': 'sass/app.scss'
				}
			}
		},

		watch: {
			sass: {
				files: [
					'sass/**/*.{scss,sass}'
				],
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass']);
};

