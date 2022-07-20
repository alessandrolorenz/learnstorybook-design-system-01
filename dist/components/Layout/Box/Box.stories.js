"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Red = void 0;

var _index = require("./index");

var _BoxDocs = _interopRequireDefault(require("./Box.docs.mdx"));

var _default = {
  title: 'Layout/Box',
  component: _index.Box
};
exports.default = _default;

var Template = function Template(args) {
  return (
    /*#__PURE__*/
    //👇 Your template goes here
    React.createElement(_index.Box, args, /*#__PURE__*/React.createElement(_index.Box, {
      w: "50%",
      border: "1px solid gray",
      p: "10px",
      m: "5px",
      bRadius: "10px"
    }, "Box content. It can be anything. Box is a div to wrap and make componentes"), /*#__PURE__*/React.createElement(_index.Box, {
      w: "50%",
      border: "1px solid gray",
      p: "10px",
      m: "5px",
      bRadius: "10px"
    }, "Box content. It can be anything. Box is a div to wrap and make componentes"))
  );
};

var Red = Template.bind({});
exports.Red = Red;
Red.args = {
  w: '300px',
  h: 'auto',
  minW: '',
  maxW: '',
  minH: '',
  maxH: '',
  vAlign: '',
  overflow: '',
  boxSizing: '',
  bgColor: 'white',
  color: 'black',
  m: '',
  mt: '',
  mr: '',
  mb: '',
  ml: '',
  mx: '',
  my: '',
  p: '',
  pt: '',
  pr: '',
  pb: '',
  pl: '',
  px: '',
  py: '',
  display: '',
  aItems: '',
  aContent: '',
  aSelf: '',
  jItems: '',
  jContent: '',
  jSelf: '',
  wrap: '',
  direction: '',
  grow: '',
  shrink: '',
  basis: '',
  order: '',
  bRadius: '10px',
  bTopLeftRadius: '',
  bTopRightRadius: '',
  bBottomRightRadius: '',
  bBottomLeftRadius: '',
  border: '1px solid black',
  bWidth: '',
  bStyle: '',
  bColor: '',
  bTop: '',
  bTopWidth: '',
  bTopStyle: '',
  bTopColor: '',
  bRight: '',
  bRightWidth: '',
  bRightStyle: '',
  bRightColor: '',
  bBottom: '',
  bBottomWidth: '',
  bBottomStyle: '',
  bBottomColor: '',
  bLeft: '',
  bLeftWidth: '',
  bLeftStyle: '',
  bLeftColor: '',
  centerContent: true,
  animation: '',
  appearance: '',
  transform: '',
  transformOrigin: '',
  visibility: '',
  whiteSpace: '',
  userSelect: '',
  pointerEvents: '',
  wordBreak: '',
  overflowWrap: '',
  textOverflow: '',
  cursor: '',
  resize: '',
  transition: '',
  objectFit: '',
  objectPosition: '',
  float: '',
  fill: '',
  stroke: '',
  outline: ''
};