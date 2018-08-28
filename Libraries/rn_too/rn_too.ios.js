/**
 * @providesModule rn_too
 * @flow
 */
'use strict';

var Nativern_too = require('NativeModules').rn_too;

/**
 * High-level docs for the rn_too iOS API can be written here.
 */

var rn_too = {
  test: function() {
    Nativern_too.test();
  }
};

module.exports = rn_too;
