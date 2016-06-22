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

      test('it should fire px-header-link-select event', function (done) {
        element.addEventListener('px-header-link-select', function (e) {
          assert(e);
          done();
        });
        element._handleTap();
      });

      test('it should fire px-header-user-select event', function (done) {
        element.addEventListener('px-header-user-select', function (e) {
          assert(e);
          done();
        });
        element._handleUserTap();
      });
    });

    suite('<px-footer>', function () {
      var element = document.getElementById('px_footer_1');
      test('renders', function () {
        assert.ok(element);
      });
    });

    suite('<px-title-bar>', function () {
      var element = document.getElementById('px_title_bar_1');
      test('renders', function () {
        assert.ok(element);
      });
    });

    suite('<px-button>', function () {
      var element = document.getElementById('px_button_1');
      test('renders', function () {
        assert.ok(element);
      });

      test('it should fire px-button-tap event', function (done) {
        element.addEventListener('px-button-tap', function (e) {
          assert(e);
          done();
        });
        element._clickHandler();
      });

      test('should update styles when modifier changes', function (done) {
        element.modifier = 'primary large';
        assert.ok(element.$.btn.classList.contains('btn--large'));
        assert.ok(element.$.btn.classList.contains('btn--primary'));
        done();
      });
    });

    suite('<px-icon>', function () {
      var element = document.getElementById('px_icon_1');
      test('renders', function () {
        assert.ok(element);
      });

      test('is should add the correct size and color to the icon', function (done) {
        assert.ok(element);
        assert(element.$.icn.style.fill === 'crimson');

        done();
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
