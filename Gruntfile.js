/*
 * makehtml
 * https://github.com/codetyphon/makehtml
 *
 * Copyright (c) 2015 codetyphon
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    makehtml: {
      default_options: {
        tasks:[
          {
            from:['test/1.txt','test/2.txt','test/3.txt'],
            to:'test/out/test.html'
          },
          {
            from:['test/3.txt','test/2.txt','test/1.txt'],
            to:'test/out/test2.html'
          }
        ]
      }
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  //grunt.registerTask('test', ['clean', 'makehtml', 'nodeunit']);

  // By default, lint and run all tests.
  //grunt.registerTask('default', ['jshint', 'test']);
  //grunt.registerTask('makehtml', ['makehtml']);

};
