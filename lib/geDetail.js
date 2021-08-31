"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.function.name.js");

var _common = _interopRequireDefault(require("./common"));

var _createApp = (0, _common["default"])(),
    name = _createApp.name,
    desc = _createApp.desc;

console.log(name, desc);