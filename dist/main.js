"use strict";

var _TaskCollection = require("./TaskCollection");

var _TaskCollection2 = _interopRequireDefault(_TaskCollection);

var _Task = require("./Task");

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _TaskCollection2.default([new _Task2.default(), new _Task2.default(), new _Task2.default()]).log();