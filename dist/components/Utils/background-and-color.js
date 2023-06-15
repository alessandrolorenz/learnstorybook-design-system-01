"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundAndColor = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _templateObject;

var BackgroundAndColor = function BackgroundAndColor(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "" : _ref$color,
      _ref$bg = _ref.bg,
      bg = _ref$bg === void 0 ? "" : _ref$bg,
      _ref$bgColor = _ref.bgColor,
      bgColor = _ref$bgColor === void 0 ? "" : _ref$bgColor,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? "" : _ref$opacity,
      _ref$bgImage = _ref.bgImage,
      bgImage = _ref$bgImage === void 0 ? "" : _ref$bgImage,
      _ref$bgSize = _ref.bgSize,
      bgSize = _ref$bgSize === void 0 ? "" : _ref$bgSize,
      _ref$bgPosition = _ref.bgPosition,
      bgPosition = _ref$bgPosition === void 0 ? "" : _ref$bgPosition,
      _ref$bgRepeat = _ref.bgRepeat,
      bgRepeat = _ref$bgRepeat === void 0 ? "" : _ref$bgRepeat,
      _ref$bgAttachment = _ref.bgAttachment,
      bgAttachment = _ref$bgAttachment === void 0 ? "" : _ref$bgAttachment,
      _ref$bgClip = _ref.bgClip,
      bgClip = _ref$bgClip === void 0 ? "" : _ref$bgClip;
  return (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  color: ", ";\n  background: ", ";\n  background-color: ", ";\n  opacity: ", ";\n  background-image: ", ";\n  background-size: ", ";\n  background-position: ", ";\n  background-repeat: ", ";\n  background-attachment: ", ";\n  background-clip: ", ";\n"])), color, bg, bgColor, opacity, bgImage, bgSize, bgPosition, bgRepeat, bgAttachment, bgClip);
};

exports.BackgroundAndColor = BackgroundAndColor;