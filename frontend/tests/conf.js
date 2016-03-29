/**
 * Configuration file as described at https://angular.github.io/protractor/#/page-objects
 * Has suites for each frontend page.
 */
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        search: ['e2e/search/SearchSpec.js'] //Search page tests
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    },
};
