suite('my awesome website', () => {
  test('should do some assertions', async () => {
      await browser.url('https://webdriver.io')
      await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
  })
})