"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Size = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _templateObject;

var Size = function Size(_ref) {
  var _ref$w = _ref.w,
      w = _ref$w === void 0 ? "" : _ref$w,
      _ref$h = _ref.h,
      h = _ref$h === void 0 ? "" : _ref$h,
      _ref$minW = _ref.minW,
      minW = _ref$minW === void 0 ? "" : _ref$minW,
      _ref$maxW = _ref.maxW,
      maxW = _ref$maxW === void 0 ? "" : _ref$maxW,
      _ref$minH = _ref.minH,
      minH = _ref$minH === void 0 ? "" : _ref$minH,
      _ref$maxH = _ref.maxH,
      maxH = _ref$maxH === void 0 ? "" : _ref$maxH,
      _ref$vAlign = _ref.vAlign,
      vAlign = _ref$vAlign === void 0 ? "" : _ref$vAlign,
      _ref$overflow = _ref.overflow,
      overflow = _ref$overflow === void 0 ? "" : _ref$overflow,
      _ref$boxSizing = _ref.boxSizing,
      boxSizing = _ref$boxSizing === void 0 ? "" : _ref$boxSizing;
  return (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  width: ", ";\n  height: ", ";\n  min-width: ", ";\n  max-width: ", ";\n  min-height: ", ";\n  max-height: ", ";\n  vertical-align: ", ";\n  overflow: ", ";\n  ", "\n\n  @media (max-width: 767px) {\n    width: ", ";\n    height: ", ";\n  }\n\n  @media (min-width: 768px) {\n    width: ", ";\n    height: ", ";\n  }\n\n  @media (min-width: 1024px) {\n    width: ", ";\n    height: ", ";\n  }\n\n  @media (min-width: 1440px) {\n    width: ", ";\n    height: ", ";\n  }\n"])), !w.xs && !w.sm && !w.md && !w.lg && w, !h.xs && !h.sm && !h.md && !h.lg && h, minW, maxW, minH, maxH, vAlign, overflow, boxSizing ? "box-sizing: ".concat(boxSizing, ";") : "box-sizing: border-box;", w.xs, h.xs, w.sm, h.sm, w.md, h.md, w.lg, h.lg);
};

exports.Size = Size;