"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _excluded = ["children", "display", "direction", "lHeight"];

var controlBox = function controlBox(_ref) {
  var children = _ref.children,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? "flex" : _ref$display,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? "column" : _ref$direction,
      _ref$lHeight = _ref.lHeight,
      lHeight = _ref$lHeight === void 0 ? "150%" : _ref$lHeight,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, Object.assign({
    display: display,
    direction: direction,
    lHeight: lHeight
  }, props), children);
};

exports.controlBox = controlBox;