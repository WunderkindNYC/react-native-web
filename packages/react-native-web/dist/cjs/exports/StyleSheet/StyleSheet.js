"use strict";

exports.__esModule = true;
exports.default = void 0;

var _flattenStyle = _interopRequireDefault(require("./flattenStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var isDev = process.env.NODE_ENV !== 'production';
var absoluteFill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

if (isDev) {
  Object.freeze(absoluteFill);
}

var StyleSheet = {
  absoluteFill: absoluteFill,
  absoluteFillObject: absoluteFill,
  compose: function compose(style1, style2) {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable prefer-rest-params */
      var len = arguments.length;

      if (len > 2) {
        var readableStyles = Array.prototype.slice.call(arguments).map(function (a) {
          return (0, _flattenStyle.default)(a);
        });
        throw new Error("StyleSheet.compose() only accepts 2 arguments, received " + len + ": " + JSON.stringify(readableStyles));
      }
      /* eslint-enable prefer-rest-params */

    }

    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  },
  create: function create(styles) {
    if (process.env.NODE_ENV !== 'production') {
      Object.keys(styles).forEach(function (key) {
        var validate = require('./validate');

        var interopValidate = validate.default ? validate.default : validate;
        interopValidate(key, styles);

        if (styles[key]) {
          Object.freeze(styles[key]);
        }
      });
    }

    return styles;
  },
  flatten: _flattenStyle.default,
  hairlineWidth: 1
};
var _default = StyleSheet;
exports.default = _default;
module.exports = exports.default;