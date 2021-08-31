"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createApp;

function createApp() {
  return {
    name: "阮书垚",
    age: 25,
    sex: "男",
    desc: "君子世无双，陌上人如玉"
  };
}