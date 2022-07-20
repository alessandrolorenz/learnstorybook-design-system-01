"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderRadius = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _templateObject;

var BorderRadius = function BorderRadius(_ref) {
  var _ref$bRadius = _ref.bRadius,
      bRadius = _ref$bRadius === void 0 ? "" : _ref$bRadius,
      _ref$bTopLeftRadius = _ref.bTopLeftRadius,
      bTopLeftRadius = _ref$bTopLeftRadius === void 0 ? "" : _ref$bTopLeftRadius,
      _ref$bTopRightRadius = _ref.bTopRightRadius,
      bTopRightRadius = _ref$bTopRightRadius === void 0 ? "" : _ref$bTopRightRadius,
      _ref$bBottomRightRadi = _ref.bBottomRightRadius,
      bBottomRightRadius = _ref$bBottomRightRadi === void 0 ? "" : _ref$bBottomRightRadi,
      _ref$bBottomLeftRadiu = _ref.bBottomLeftRadius,
      bBottomLeftRadius = _ref$bBottomLeftRadiu === void 0 ? "" : _ref$bBottomLeftRadiu;
  return (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n"])), bRadius, bTopLeftRadius, bTopRightRadius, bBottomRightRadius, bBottomLeftRadius);
};

exports.BorderRadius = BorderRadius;