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
      .end()
  },

  'When the Camera is searched for, it is the only item returned in the list of items': function test(browser) {
    browser
      .setValue('.form-control', 'Camera')
      browser.expect.element('#App').text.to.not.contain('USB Stick');
      browser.expect.element('#App').text.to.not.contain('USB Plug');
      browser.expect.element('#App').text.to.not.contain('Small Phone');
      browser.expect.element('#App').text.to.contain('Camera');
    },
};

