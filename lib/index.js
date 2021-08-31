"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es.array.map.js");

var _common = _interopRequireDefault(require("./common"));

function _default() {
  var names = ["阮垚", "黄开珍", "夏前进"];
  return names.map(function (val) {
    return val;
  });
}

var data = (0, _common["default"])();
console.log(data);