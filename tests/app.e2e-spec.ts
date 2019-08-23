import { browser } from 'protractor'
var j = require('jasmine');

j.describe('core App', () => {

    /// Create a driver for device
    j.beforeAll(() => {
        // Configuration for Allure Reports
    });

    j.beforeEach(() => {
    });

    j.it('Sample Test Case', () => {
        browser.waitForAngularEnabled(true);
    });

});