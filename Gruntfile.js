module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            json: {
                files: ['assets/inputs/*.json'],
                tasks: ['copy:json', 'json-minify']
            },
            css: {
                files: ['assets/css/*.css'],
                tasks: ['csslint', 'newer:cssmin']
            },
            js: {
                files: ['assets/js/*.js'],
                tasks: ['jshint', 'newer:uglify:js']
            }
        },
        copy: {
            json: {
                files: [
                  {expand: true, src: ['assets/inputs/**'], dest: 'build'}
                ]
            }
        },
        'json-minify': {
            build: {
                files: 'build/assets/inputs/*.json'
            }
        },
        uglify: {
            js: {
                files: [{
                    expand: true,
                    cwd: 'assets/js',
                    src: '**/*.js',
                    dest: 'build/assets/js'
                }]
            }
        },
        cssmin: {
            minify_files: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css'],
                    dest: 'build/assets/css',
                    ext: '.css'
                }]
            }
        },
        csslint: {
            src: ['assets/css/*.css']
        },
        jshint: {
            all: ['Gruntfile.js'].concat(['assets/js/*.js'])
        }
    });

    // Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-json-minify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-newer');

    // Register the default tasks.
    grunt.registerTask('default', ['watch']);
};