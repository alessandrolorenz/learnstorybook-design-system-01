"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typography = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _templateObject;

var Typography = function Typography(_ref) {
  var _ref$fFamily = _ref.fFamily,
      fFamily = _ref$fFamily === void 0 ? "" : _ref$fFamily,
      _ref$fSize = _ref.fSize,
      fSize = _ref$fSize === void 0 ? "" : _ref$fSize,
      _ref$fWeight = _ref.fWeight,
      fWeight = _ref$fWeight === void 0 ? "" : _ref$fWeight,
      _ref$fStyle = _ref.fStyle,
      fStyle = _ref$fStyle === void 0 ? "" : _ref$fStyle,
      _ref$lHeight = _ref.lHeight,
      lHeight = _ref$lHeight === void 0 ? "" : _ref$lHeight,
      _ref$lSpacing = _ref.lSpacing,
      lSpacing = _ref$lSpacing === void 0 ? "" : _ref$lSpacing,
      _ref$tAlign = _ref.tAlign,
      tAlign = _ref$tAlign === void 0 ? "" : _ref$tAlign,
      _ref$tTransform = _ref.tTransform,
      tTransform = _ref$tTransform === void 0 ? "" : _ref$tTransform,
      _ref$tDecoration = _ref.tDecoration,
      tDecoration = _ref$tDecoration === void 0 ? "" : _ref$tDecoration,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? "" : _ref$position;
  return (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  font-style: ", ";\n  line-height: ", ";\n  letter-spacing: ", ";\n  text-align: ", ";\n  text-transform: ", ";\n  text-decoration: ", ";\n  position: ", ";\n\n  @media (max-width: 767px) {\n    text-align: ", ";\n  }\n\n  @media (min-width: 768px) {\n    text-align: ", ";\n  }\n\n  @media (min-width: 1024px) {\n    text-align: ", ";\n  }\n\n  @media (min-width: 1440px) {\n    text-align: ", ";\n  }\n"])), fFamily, fSize, fWeight, fStyle, lHeight, lSpacing, !tAlign.xs && !tAlign.sm && !tAlign.md && !tAlign.lg && tAlign, tTransform, tDecoration, position, tAlign.xs, tAlign.sm, tAlign.md, tAlign.lg);
};

exports.Typography = Typography;