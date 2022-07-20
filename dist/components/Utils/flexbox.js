"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexBox = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _templateObject;

var FlexBox = function FlexBox(_ref) {
  var _ref$display = _ref.display,
      display = _ref$display === void 0 ? "" : _ref$display,
      _ref$aItems = _ref.aItems,
      aItems = _ref$aItems === void 0 ? "" : _ref$aItems,
      _ref$aContent = _ref.aContent,
      aContent = _ref$aContent === void 0 ? "" : _ref$aContent,
      _ref$aSelf = _ref.aSelf,
      aSelf = _ref$aSelf === void 0 ? "" : _ref$aSelf,
      _ref$jItems = _ref.jItems,
      jItems = _ref$jItems === void 0 ? "" : _ref$jItems,
      _ref$jContent = _ref.jContent,
      jContent = _ref$jContent === void 0 ? "" : _ref$jContent,
      _ref$jSelf = _ref.jSelf,
      jSelf = _ref$jSelf === void 0 ? "" : _ref$jSelf,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? "" : _ref$wrap,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? "" : _ref$direction,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? "" : _ref$grow,
      _ref$shrink = _ref.shrink,
      shrink = _ref$shrink === void 0 ? "" : _ref$shrink,
      _ref$basis = _ref.basis,
      basis = _ref$basis === void 0 ? "" : _ref$basis,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? "" : _ref$order;
  return (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: ", ";\n  align-items: ", ";\n  align-content: ", ";\n  align-self: ", ";\n  justify-items: ", ";\n  justify-content: ", ";\n  justify-self: ", ";\n  flex-wrap: ", ";\n  flex-direction: ", ";\n  flex-grow: ", ";\n  flex-shrink: ", ";\n  flex-basis: ", ";\n  order: ", ";\n\n  @media (max-width: 767px) {\n    display: ", ";\n    align-items: ", ";\n    align-content: ", ";\n    align-self: ", ";\n    justify-items: ", ";\n    justify-content: ", ";\n    justify-self: ", ";\n    flex-wrap: ", ";\n    flex-direction: ", ";\n    flex-grow: ", ";\n    flex-shrink: ", ";\n    flex-basis: ", ";\n    order: ", ";\n  }\n\n  @media (min-width: 768px) {\n    display: ", ";\n    align-items: ", ";\n    align-content: ", ";\n    align-self: ", ";\n    justify-items: ", ";\n    justify-content: ", ";\n    justify-self: ", ";\n    flex-wrap: ", ";\n    flex-direction: ", ";\n    flex-grow: ", ";\n    flex-shrink: ", ";\n    flex-basis: ", ";\n    order: ", ";\n  }\n\n  @media (min-width: 1024px) {\n    display: ", ";\n    align-items: ", ";\n    align-content: ", ";\n    align-self: ", ";\n    justify-items: ", ";\n    justify-content: ", ";\n    justify-self: ", ";\n    flex-wrap: ", ";\n    flex-direction: ", ";\n    flex-grow: ", ";\n    flex-shrink: ", ";\n    flex-basis: ", ";\n    order: ", ";\n  }\n\n  @media (min-width: 1440px) {\n    display: ", ";\n    align-items: ", ";\n    align-content: ", ";\n    align-self: ", ";\n    justify-items: ", ";\n    justify-content: ", ";\n    justify-self: ", ";\n    flex-wrap: ", ";\n    flex-direction: ", ";\n    flex-grow: ", ";\n    flex-shrink: ", ";\n    flex-basis: ", ";\n    order: ", ";\n  }\n"])), !display.xs && !display.sm && !display.md && !display.lg && display, !aItems.xs && !aItems.sm && !aItems.md && !aItems.lg && aItems, !aContent.xs && !aContent.sm && !aContent.md && !aContent.lg && aContent, !aSelf.xs && !aSelf.sm && !aSelf.md && !aSelf.lg && aSelf, !jItems.xs && !jItems.sm && !jItems.md && !jItems.lg && jItems, !jContent.xs && !jContent.sm && !jContent.md && !jContent.lg && jContent, !jSelf.xs && !jSelf.sm && !jSelf.md && !jSelf.lg && jSelf, !wrap.xs && !wrap.sm && !wrap.md && !wrap.lg && wrap, !direction.xs && !direction.sm && !direction.md && !direction.lg && direction, !grow.xs && !grow.sm && !grow.md && !grow.lg && grow, !shrink.xs && !shrink.sm && !shrink.md && !shrink.lg && shrink, !basis.xs && !basis.sm && !basis.md && !basis.lg && basis, !order.xs && !order.sm && !order.md && !order.lg && order, display.xs, aItems.xs, aContent.xs, aSelf.xs, jItems.xs, jContent.xs, jSelf.xs, wrap.xs, direction.xs, grow.xs, shrink.xs, basis.xs, order.xs, display.sm, aItems.sm, aContent.sm, aSelf.sm, jItems.sm, jContent.sm, jSelf.sm, wrap.sm, direction.sm, grow.sm, shrink.sm, basis.sm, order.sm, display.md, aItems.md, aContent.md, aSelf.md, jItems.md, jContent.md, jSelf.md, wrap.md, direction.md, grow.md, shrink.md, basis.md, order.md, display.lg, aItems.lg, aContent.lg, aSelf.lg, jItems.lg, jContent.lg, jSelf.lg, wrap.lg, direction.lg, grow.lg, shrink.lg, basis.lg, order.lg);
};

exports.FlexBox = FlexBox;