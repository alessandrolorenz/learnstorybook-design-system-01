"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Space = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _templateObject;

var Space = function Space(_ref) {
  var _ref$m = _ref.m,
      m = _ref$m === void 0 ? "" : _ref$m,
      _ref$mt = _ref.mt,
      mt = _ref$mt === void 0 ? "" : _ref$mt,
      _ref$mr = _ref.mr,
      mr = _ref$mr === void 0 ? "" : _ref$mr,
      _ref$mb = _ref.mb,
      mb = _ref$mb === void 0 ? "" : _ref$mb,
      _ref$ml = _ref.ml,
      ml = _ref$ml === void 0 ? "" : _ref$ml,
      _ref$mx = _ref.mx,
      mx = _ref$mx === void 0 ? "" : _ref$mx,
      _ref$my = _ref.my,
      my = _ref$my === void 0 ? "" : _ref$my,
      _ref$p = _ref.p,
      p = _ref$p === void 0 ? "" : _ref$p,
      _ref$pt = _ref.pt,
      pt = _ref$pt === void 0 ? "" : _ref$pt,
      _ref$pr = _ref.pr,
      pr = _ref$pr === void 0 ? "" : _ref$pr,
      _ref$pb = _ref.pb,
      pb = _ref$pb === void 0 ? "" : _ref$pb,
      _ref$pl = _ref.pl,
      pl = _ref$pl === void 0 ? "" : _ref$pl,
      _ref$px = _ref.px,
      px = _ref$px === void 0 ? "" : _ref$px,
      _ref$py = _ref.py,
      py = _ref$py === void 0 ? "" : _ref$py;
  return (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  margin: ", ";\n  margin-top: ", ";\n  margin-right: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  ", "\n  ", "\n\n  padding: ", ";\n  padding-top: ", ";\n  padding-right: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  ", "\n  ", "\n\n  @media (max-width: 767px) {\n    padding: ", ";\n    padding-top: ", ";\n    padding-right: ", ";\n    padding-bottom: ", ";\n    padding-left: ", ";\n    ", "\n    ", "\n    margin: ", ";\n    margin-top: ", ";\n    margin-right: ", ";\n    margin-bottom: ", ";\n    margin-left: ", ";\n    ", "\n    ", "\n  }\n\n  @media (min-width: 768px) {\n    padding: ", ";\n    padding-top: ", ";\n    padding-right: ", ";\n    padding-bottom: ", ";\n    padding-left: ", ";\n    ", "\n    ", "\n    margin: ", ";\n    margin-top: ", ";\n    margin-right: ", ";\n    margin-bottom: ", ";\n    margin-left: ", ";\n    ", "\n    ", "\n  }\n\n  @media (min-width: 1024px) {\n    padding: ", ";\n    padding-top: ", ";\n    padding-right: ", ";\n    padding-bottom: ", ";\n    padding-left: ", ";\n    ", "\n    ", "\n    margin: ", ";\n    margin-top: ", ";\n    margin-right: ", ";\n    margin-bottom: ", ";\n    margin-left: ", ";\n    ", "\n    ", "\n  }\n\n  @media (min-width: 1440px) {\n    padding: ", ";\n    padding-top: ", ";\n    padding-right: ", ";\n    padding-bottom: ", ";\n    padding-left: ", ";\n    ", "\n    ", "\n    margin: ", ";\n    margin-top: ", ";\n    margin-right: ", ";\n    margin-bottom: ", ";\n    margin-left: ", ";\n    ", "\n    ", "\n  }\n"])), !m.xs && !m.sm && !m.md && !m.lg && m, !mt.xs && !mt.sm && !mt.md && !mt.lg && mt, !mr.xs && !mr.sm && !mr.md && !mr.lg && mr, !mb.xs && !mb.sm && !mb.md && !mb.lg && mb, !ml.xs && !ml.sm && !ml.md && !ml.lg && ml, !mx.xs && !mx.sm && !mx.md && !mx.lg && "margin-left: ".concat(mx, "; margin-right: ").concat(mx, ";"), !my.xs && !my.sm && !my.md && !my.lg && "margin-top: ".concat(my, "; margin-bottom: ").concat(my, ";"), !p.xs && !p.sm && !p.md && !p.lg && p, !pt.xs && !pt.sm && !pt.md && !pt.lg && pt, !pr.xs && !pr.sm && !pr.md && !pr.lg && pr, !pb.xs && !pb.sm && !pb.md && !pb.lg && pb, !pl.xs && !pl.sm && !pl.md && !pl.lg && pl, !px.xs && !px.sm && !px.md && !px.lg && "padding-left: ".concat(px, "; padding-right: ").concat(px, ";"), !py.xs && !py.sm && !py.md && !py.lg && "padding-top: ".concat(py, "; padding-bottom: ").concat(py, ";"), p.xs, pt.xs, pr.xs, pb.xs, pl.xs, px.xs ? "padding-left: ".concat(px.xs, "; padding-right: ").concat(px.xs, ";") : "", py.xs ? "padding-top: ".concat(py.xs, "; padding-bottom: ").concat(py.xs, ";") : "", m.xs, mt.xs, mr.xs, mb.xs, ml.xs, mx.xs ? "margin-left: ".concat(mx.xs, "; margin-right: ").concat(mx.xs, ";") : "", my.xs ? "margin-top: ".concat(my.xs, "; margin-bottom: ").concat(my.xs, ";") : "", p.sm, pt.sm, pr.sm, pb.sm, pl.sm, px.sm ? "padding-left: ".concat(px.sm, "; padding-right: ").concat(px.sm, ";") : "", py.sm ? "padding-top: ".concat(py.sm, "; padding-bottom: ").concat(py.sm, ";") : "", m.sm, mt.sm, mr.sm, mb.sm, ml.sm, mx.sm ? "margin-left: ".concat(mx.sm, "; margin-right: ").concat(mx.sm, ";") : "", my.sm ? "margin-top: ".concat(my.sm, "; margin-bottom: ").concat(my.sm, ";") : "", p.md, pt.md, pr.md, pb.md, pl.md, px.md ? "padding-left: ".concat(px.md, "; padding-right: ").concat(px.md, ";") : "", py.md ? "padding-top: ".concat(py.md, "; padding-bottom: ").concat(py.md, ";") : "", m.md, mt.md, mr.md, mb.md, ml.md, mx.md ? "margin-left: ".concat(mx.md, "; margin-right: ").concat(mx.md, ";") : "", my.md ? "margin-top: ".concat(my.md, "; margin-bottom: ").concat(my.md, ";") : "", p.lg, pt.lg, pr.lg, pb.lg, pl.lg, px.lg ? "padding-left: ".concat(px.lg, "; padding-right: ").concat(px.lg, ";") : "", py.lg ? "padding-top: ".concat(py.lg, "; padding-bottom: ").concat(py.lg, ";") : "", m.lg, mt.lg, mr.lg, mb.lg, ml.lg, mx.lg ? "margin-left: ".concat(mx.lg, "; margin-right: ").concat(mx.lg, ";") : "", my.lg ? "margin-top: ".concat(my.lg, "; margin-bottom: ").concat(my.lg, ";") : "");
};

exports.Space = Space;