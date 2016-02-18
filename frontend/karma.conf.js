// Karma configuration
// Generated on Tue Feb 16 2016 13:29:47 GMT-0700 (MST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // 3dr party dependencies
      'web/bower_components/angular/angular.min.js',
      'web/bower_components/angular-mocks/angular-mocks.js',
      'web/bower_components/angular-material/angular-material.js',
      "web/bower_components/angular-aria/angular-aria.js",
      "web/bower_components/angular-animate/angular-animate.js",
      "web/bower_components/angular-messages/angular-messages.js",
      "web/bower_components/angular-ui-router/release/angular-ui-router.js",
      "web/bower_components/a0-angular-storage/dist/angular-storage.js",
      "web/bower_components/d3/d3.js",
      "node_modules/karma-jasmine-html-reporter/src/index.js",
      // source files
      'web/app/*.js',
      'web/app/controllers/*.js',
      'web/app/services/*.js',
      // test files
      'web/app/test/services/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['kjhtml'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
