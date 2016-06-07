module.exports = {
  verbose: true,
  plugins: {
    local: {
      browsers: ['chrome']
    },
    sauce: {
      disabled: true
    }
  },
  suites: [
    'test/px-partials-test-fixture.html'
  ]
};
