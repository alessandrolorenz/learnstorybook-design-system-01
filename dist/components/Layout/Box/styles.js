"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _flexbox = require("../../Utils/flexbox");

var _typography = require("../../Utils/typography");

var _space = require("../../Utils/space");

var _position = require("../../Utils/position");

var _size = require("../../Utils/size");

var _backgroundAndColor = require("../../Utils/background-and-color");

var _borders = require("../../Utils/borders");

var _borderRadius = require("../../Utils/border-radius");

var _shadow = require("../../Utils/shadow");

var _otherProps = require("../../Utils/other-props");

var _styles = require("../../../shared/styles");

var _templateObject;

var Container = _styled.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\n", "\n\ndisplay: ", ";\n", "\n", "\n", "\n", "\n", "\n", "   \n", "\n", "\n", "\n", "\n\n::-webkit-scrollbar {\n  width: 16px;               /* width of the entire scrollbar */\n}\n\n::-webkit-scrollbar-track {\n  background: ", ";        /* color of the tracking area */\n  border: 1px solid ", ";\n  border-radius: 3px;\n  background-clip: content-box;   /* THIS IS IMPORTANT */\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: ", ");    /* color of the scroll thumb */\n  border-radius: 2px;       /* roundness of the scroll thumb */\n  border: 5px solid ", ";  /* creates padding around scroll thumb */\n}\n\n"])), function (props) {
  if (props.centerContent) {
    return "\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  ";
  }
}, function (props) {
  return props.display || 'flex';
}, _flexbox.FlexBox, _typography.Typography, _space.Space, _position.Position, _size.Size, _backgroundAndColor.BackgroundAndColor, _borders.Borders, _borderRadius.BorderRadius, _shadow.Shadow, _otherProps.OtherProps, _styles.color.medium, _styles.color.tertiary, _styles.color.medium, _styles.color.tertiary);

exports.Container = Container;