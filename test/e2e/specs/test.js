// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  beforeEach : function(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
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

  'Two different items can be added to the shopping cart': function test(browser) {
      browser.useXpath()
      browser.click('//*[@id="16GB"]')
      browser.click('//*[@id="Nokia Phone"]')
      browser.assert.containsText('//*[@id="shoppingCart"]/ul', '01 Small Phone Nokia Phone ($199.00)')
      browser.assert.containsText('//*[@id="shoppingCart"]/ul', '01 USB Stick 16GB ($6.95)')
      browser.end()
  },

  'A multiple of an item can be added in the cart': function test(browser) {
      browser.useXpath()
      browser.click('//*[@id="16GB"]')
      browser.click('//*[@id="addOneUSB Stick 16GB"]')
      browser.assert.containsText('//*[@id="shoppingCart"]/ul', '02 USB Stick 16GB ($6.95)')
      browser.end()
    },

    'A multiple of an item can be removed in the cart': function test(browser) {
      browser.useXpath()
      browser.click('//*[@id="16GB"]')
      browser.click('//*[@id="removeOneUSB Stick 16GB"]')
      browser.assert.containsText('//*[@id="shoppingCart"]/ul', '0 Items')
      browser.end()
    },

    'All of one item can be removed from the cart': function test(browser) {
      browser.useXpath()
      browser.click('//*[@id="16GB"]')
      browser.click('//*[@id="addOneUSB Stick 16GB"]')
      browser.click('//*[@id="removeAllUSB Stick 16GB"]')
      browser.assert.containsText('//*[@id="shoppingCart"]/ul', '0 Items')
      browser.end()
    },

    'A donation can be added to a purchase': function test(browser) {
      browser.useXpath()
      browser.click('//*[@id="16GB"]')
      browser.click('//*[@id="shoppingCart"]/ul/li[3]/div[2]/div/select')
      browser.click('//*[@id="shoppingCart"]/ul/li[3]/div[2]/div/select/option[4]')
      browser.click('//*[@id="shoppingCart"]/ul/li[3]/div[2]/div/span')
      browser.assert.containsText('//*[@id="shoppingCart"]/ul', '$16.95')
      browser.end()
    }
   
};



