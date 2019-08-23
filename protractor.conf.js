var jasmineReporters = require('jasmine-reporters');

var junitReporter = new jasmineReporters.JUnitXmlReporter({
  savePath: process.env.NEVERCODE_XUNIT_RESULTS_DIR,
  consolidateAll: false,
});

exports.config = {

    allScriptsTimeout: 200000,
    specs: [
      './tests/app.e2e-spec.ts'
    ],
    capabilities: {
      'browserName': 'chrome',
      marionette: true,
      acceptInsecureCerts: true
    },
  ...
  framework : 'jasmine2',
  onPrepare: function() {
    jasmine.getEnv().addReporter(junitReporter);
  },
  ...
};