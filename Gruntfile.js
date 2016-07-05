module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: ['assets/css/*.css', '!assets/css/*.min.css'],
                tasks: ['csslint', 'cssmin']
            },
            js: {
                files: ['assets/js/*.js'],
                tasks: ['jshint', 'qunit', 'newer:uglify:js']
            },
            tests_js: {
                files: ['assets/js/tests/*.js'],
                tasks: ['qunit']
            }
        },
        uglify: {
            js: {
                files: [{
                    expand: true,
                    cwd: 'assets/js',
                    src: '**/*.js',
                    dest: 'build/assets/js',
                    ext: '.min.js'
                }]
            }
        },
        cssmin: {
            minify_files: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        },
        csslint: {
            options: {
                csslintrc: 'csslintrc'
            },
            src: ['assets/css/*.css']
        },
        jshint: {
            all: ['Gruntfile.js'].concat(['assets/js/*.js'])
        },
        qunit: {
            js: ['tests/index.html']
        }
    });

    // Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Register the default tasks.
    grunt.registerTask('default', ['watch']);
};