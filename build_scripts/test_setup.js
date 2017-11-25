// this file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before tests run
require('babel-register')();

// Disable webpack features Mocha doesn't understand
require.extensions['.css'] = function() {};