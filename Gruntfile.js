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
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.registerTask('build', ['sass']);
};

