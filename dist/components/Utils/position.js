"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Position = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _templateObject;

var Position = function Position(_ref) {
  var _ref$position = _ref.position,
      position = _ref$position === void 0 ? "" : _ref$position,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? "" : _ref$zIndex,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? "" : _ref$top,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? "" : _ref$right,
      _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? "" : _ref$bottom,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? "" : _ref$left;
  return (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  position: ", ";\n  z-index: ", ";\n  top: ", ";\n  right: ", ";\n  bottom: ", ";\n  left: ", ";\n"])), position, zIndex, top, right, bottom, left);
};

exports.Position = Position;