

	module.exports = function (grunt) {

		var PUBLIC_DIST = './public';

		var DIST_TEST_PATH = './dist/test';
		var DIST_PROD_PATH = './dist/prod';
    
    	var TEST_DOMAIN = 'http://localhost:3001'
    	var PROD_DOMAIN = 'http://localhost:3001';

        var DOMAIN_REPLACEMENT_PATH = PUBLIC_DIST + '/app/shared/configs.js';





		grunt.initConfig({

			pkg: grunt.file.readJSON('package.json'),



	        copy: {

	            test: {

	                dot: true,
	                expand: true,
	                cwd: PUBLIC_DIST,
	                src: ['**', '!**/app/**', '!css/*.css', '!css/*.less', '!css/*.map', '!app/**/*.js', '!app/**/*.html', 'css/people_week.min.css', 'app/modules.min.js'],
	                dest: DIST_TEST_PATH
	            },

	            prod: {

	                dot: true,
	                expand: true,
	                cwd: PUBLIC_DIST,
	                src: ['**', '!**/app/**', '!css/*.css', '!css/*.less', '!css/*.map', '!app/**/*.js', '!app/**/*.html', 'css/people_week.min.css', 'app/modules.min.js'],
	                dest: DIST_PROD_PATH
	            }
	        },

			replace: {

				test: {

	                src: [ DOMAIN_REPLACEMENT_PATH ],
	                overwrite: true,
	                replacements: [{
	                    from: /<!--BaseUrl>(.*)<--BaseUrl>/g,
	                    to: '<!--BaseUrl>*/ \''+ TEST_DOMAIN +'\' /*<--BaseUrl>'
	                }]
	            },

	            prod: {

	                src: [ DOMAIN_REPLACEMENT_PATH ],
	                overwrite: true,
	                replacements: [{
	                    from: /<!--BaseUrl>(.*)<--BaseUrl>/g,
	                    to: '<!--BaseUrl>*/ \''+ PROD_DOMAIN +'\' /*<--BaseUrl>'
	                }]
	            }
	        },

	        concat: {

				prepare: {

					files: [

						{

							dest: PUBLIC_DIST + '/app/modules.min.js',

							src: [

								PUBLIC_DIST + '/app/shared/shared-index.js',
								PUBLIC_DIST + '/app/shared/configs.js',
								PUBLIC_DIST + '/app/shared/router.js',
								PUBLIC_DIST + '/app/shared/http-proxy.js',

								PUBLIC_DIST + '/app/shared/services/utilities.js',
								PUBLIC_DIST + '/app/shared/services/rest-config.js',
								PUBLIC_DIST + '/app/shared/services/rest-service.js',
								PUBLIC_DIST + '/app/shared/services/socket-service.js',
								PUBLIC_DIST + '/app/shared/services/notification-service.js',

								PUBLIC_DIST + '/app/shared/directives/auto-scroll.js',

								PUBLIC_DIST + '/app/shared/controllers/header-ctrl.js',
								PUBLIC_DIST + '/app/shared/controllers/footer-ctrl.js',


								PUBLIC_DIST + '/app/home/home-index.js',
								PUBLIC_DIST + '/app/home/home-service.js',
								PUBLIC_DIST + '/app/home/controllers/home-ctrl.js',

								
								PUBLIC_DIST + '/app/boot.js',
								PUBLIC_DIST + '/app/app.js',
								PUBLIC_DIST + '/app/templates.js'
							]
						}
					]
				}
			},

			cssmin: {

				prepare: {

					files: [

						{

							dest: PUBLIC_DIST + '/css/chat.min.css',

							src: [

								PUBLIC_DIST + '/css/base.css',
								PUBLIC_DIST + '/css/icons.css',
								PUBLIC_DIST + '/css/style.css',
							]
						}
					]
				}
			},

			ngtemplates:  {

				chat: {

    				cwd: PUBLIC_DIST,
					src: 'app/**/*.html',
					dest: PUBLIC_DIST + '/app/templates.js'
				}
			},

	        uglify: {

				options: {
					mangle: false
				},

	        	prepare: {

					src : PUBLIC_DIST + '/app/modules.min.js',
					dest : PUBLIC_DIST + '/app/modules.min.js'
				},

				test: {

					src : DIST_TEST_PATH + '/app/modules.min.js',
					dest : DIST_TEST_PATH + '/app/modules.min.js'
				},

				prod: {

					src : DIST_PROD_PATH + '/app/modules.min.js',
					dest : DIST_PROD_PATH + '/app/modules.min.js'
				}
			},

		    connect: {

				prepare: {

					options: {

						port: 9001,
        				hostname: 'localhost',
						base: PUBLIC_DIST,
	                    keepalive: true,
	                    open: true
					}
				},

				prod: {

					options: {

						port: 9002,
        				hostname: 'localhost',
						base: DIST_PROD_PATH,
	                    keepalive: true,
	                    open: true
					}
				},

				test: {

					options: {

						port: 9004,
        				hostname: 'localhost',
						base: DIST_TEST_PATH,
	                    keepalive: true,
	                    open: true
					}
				}
			}
	    });


    	grunt.option('force', true);

		grunt.loadNpmTasks('grunt-text-replace');
		grunt.loadNpmTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-angular-templates');
		grunt.loadNpmTasks('grunt-contrib-connect');



		
		grunt.registerTask('default', 'Hello', function() {
		    grunt.log.writeln('sudoCODE 2.0.').ok();	        
		});


		grunt.registerTask('build:test', [
	        'ngtemplates',
	        'replace:test',
	        'concat:prepare',
			'cssmin:prepare',
	        'copy:prod'
	    ]);

		grunt.registerTask('build:prod', [
	        'ngtemplates',
	        'replace:prod',
	        'concat:prepare',
			'cssmin:prepare',
	        'copy:prod',
	        'uglify:prod'
	    ]);


		grunt.registerTask('prepare:test', [
	        'ngtemplates',
	        'replace:test',
	        'concat:prepare',
			'cssmin:prepare'
	    ]);

		grunt.registerTask('prepare:prod', [
	        'ngtemplates',
	        'replace:prod',
	        'concat:prepare',
			'cssmin:prepare'
	    ]);



		grunt.registerTask('buildrun:test', [
	        'build:test',
	        'connect:test'
	    ]);

		grunt.registerTask('buildrun:prod', [
	        'build:prod',
	        'connect:prod'
	    ]);


		grunt.registerTask('run:test', [
	        'prepare:test',
	        'connect:prepare'
	    ]);

		grunt.registerTask('run:prod', [
	        'prepare:prod',
	        'connect:prepare'
	    ]);
	}