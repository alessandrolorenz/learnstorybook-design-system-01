"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shadow = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _templateObject;

var Shadow = function Shadow(_ref) {
  var _ref$boxShadow = _ref.boxShadow,
      boxShadow = _ref$boxShadow === void 0 ? "" : _ref$boxShadow;
  return (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  box-shadow: ", ";\n"])), boxShadow);
};

exports.Shadow = Shadow;