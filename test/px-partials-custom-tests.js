'use strict';
/* global assert, suite, test, document*/
// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('<px-partials>', function () {
    suite('<px-header>', function () {
      var element = document.getElementById('px_header_1');
      test('renders', function () {
        assert.ok(element);
      });
    });
    suite('<px-footer>', function () {
      var element = document.getElementById('px_footer_1');
      test('renders', function () {
        assert.ok(element);
      });
    });
    suite('<px-button>', function () {
      var element = document.getElementById('px_button_1');
      test('renders', function () {
        assert.ok(element);
      });
    });
    suite('<px-icon>', function () {
      var element = document.getElementById('px_icon_1');
      test('renders', function () {
        assert.ok(element);
      });
    });
    suite('<px-brand>', function () {
      var element = document.getElementById('px_brand_1');
      test('renders', function () {
        assert.ok(element);
      });
    });
  });
}
