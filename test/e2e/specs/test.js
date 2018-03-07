// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  beforeEach : function(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#App', 5000)
  },

  'the main page is loaded': function (browser) {
    browser
      .assert.visible('#App')
      .assert.elementPresent('#searchBar')
      .assert.elementPresent('#itemList')
      .assert.elementPresent('#shoppingCart')
      .end();
  },

  'When the Camera is searched for, it is the only item returned in the list of items': function test(browser) {
    browser
      .setValue('.form-control', 'Camera')
      browser.expect.element('#App').text.to.not.contain('USB Stick');
      browser.expect.element('#App').text.to.not.contain('USB Plug');
      browser.expect.element('#App').text.to.not.contain('Small Phone');
      browser.expect.element('#App').text.to.contain('Camera');
  },

  'When the USB Plug is searched for, it is the only item returned in the list of items': function test(browser) {
    browser
      .clearValue('.form-control')
      .setValue('.form-control', 'USB Plug')
      browser.expect.element('#App').text.to.not.contain('USB Stick');
      browser.expect.element('#App').text.to.not.contain('Camera');
      browser.expect.element('#App').text.to.not.contain('Small Phone');
      browser.expect.element('#App').text.to.contain('USB Plug');
  },

  'When the USB Stick is searched for, it is the only item returned in the list of items': function test(browser) {
    browser
      .clearValue('.form-control')
      .setValue('.form-control', 'USB Stick')
      browser.expect.element('#App').text.to.not.contain('USB Plug');
      browser.expect.element('#App').text.to.not.contain('Camera');
      browser.expect.element('#App').text.to.not.contain('Small Phone');
      browser.expect.element('#App').text.to.contain('USB Stick');
  },

  'When the Small Phone is searched for, it is the only item returned in the list of items': function test(browser) {
    browser
      .clearValue('.form-control')
      .setValue('.form-control', 'Small Phone')
      browser.expect.element('#App').text.to.not.contain('USB Plug');
      browser.expect.element('#App').text.to.not.contain('Camera');
      browser.expect.element('#App').text.to.not.contain('USB Stick');
      browser.expect.element('#App').text.to.contain('Small Phone');
      browser.end()
      
  },

  'An item can be added to the shopping cart': function test(browser) {
      browser.useXpath()
      browser.click('//*[@id="16GB"]')
      browser.assert.containsText('//*[@id="shoppingCart"]/ul', '01 USB Stick 16GB ($6.95)')
      browser.end()
  },
};



