var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert

describe('my awesome website', () => {
    it('should do some assertions', async () => {
        await browser.url('https://webdriver.io')
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    })
})