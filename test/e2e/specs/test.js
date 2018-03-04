// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'techtest': function (browser) {
    browser
    .url('http://localhost:8080/')
      .waitForElementVisible('#app', 5000)
      .assert.visible('#app')
      .assert.elementPresent('.form-control')
      .end();
  },
};

