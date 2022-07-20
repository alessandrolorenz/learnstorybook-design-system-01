"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithInteractions = exports.AllButtonNew = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/regeneratorRuntime"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _StoryLinkWrapper = require("./StoryLinkWrapper");

var _testingLibrary = require("@storybook/testing-library");

var _ButtonNew = require("./ButtonNew");

var _Icon = require("./Icon");

var _default = {
  title: 'Design System/ButtonNew',
  component: _ButtonNew.ButtonNew
};
exports.default = _default;

var AllButtonNew = function AllButtonNew(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ButtonNew.ButtonNew, Object.assign({
    appearance: "primary",
    size: "small"
  }, args), "Primary"), /*#__PURE__*/_react.default.createElement(_ButtonNew.ButtonNew, Object.assign({
    appearance: "outline",
    size: "small",
    containsIcon: true
  }, args), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "link",
    "aria-label": "Link"
  })), /*#__PURE__*/_react.default.createElement(_ButtonNew.ButtonNew, Object.assign({
    appearance: "outline",
    size: "small"
  }, args), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "link"
  }), "Link"));
};

exports.AllButtonNew = AllButtonNew;
AllButtonNew.args = {
  isDisabled: false,
  isLoading: false,
  size: 'large',
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554',
  loadingText: '...Loading'
};
AllButtonNew.storyName = 'all ButtonNews';

var WithInteractions = function WithInteractions() {
  return /*#__PURE__*/_react.default.createElement(_ButtonNew.ButtonNew, {
    ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    appearance: "primary",
    href: "http://storybook.js.org"
  }, "Button");
};

exports.WithInteractions = WithInteractions;

WithInteractions.play = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(_ref) {
    var canvasElement, canvas;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            canvasElement = _ref.canvasElement;
            // Assigns canvas to the component root element
            canvas = (0, _testingLibrary.within)(canvasElement);
            _context.next = 4;
            return _testingLibrary.userEvent.click(canvas.getByRole("link"));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

WithInteractions.storyName = "button with interactions";