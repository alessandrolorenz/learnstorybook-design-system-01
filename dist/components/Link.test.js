"use strict";

var _react = require("@testing-library/react");

var _Link = require("./Link");

test('has a href attribute when rendering with linkWrapper', function () {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  var LinkWrapper = function LinkWrapper(props) {
    return /*#__PURE__*/React.createElement("a", props);
  };

  var _render = (0, _react.render)( /*#__PURE__*/React.createElement(_Link.Link, {
    href: "https://storybook.js.org/tutorials/",
    LinkWrapper: LinkWrapper
  }, "Link Text")),
      container = _render.container;

  var linkElement = container.querySelector('a[href="https://storybook.js.org/tutorials/"]');
  expect(linkElement).not.toBeNull();
  expect(linkElement.textContent).toEqual('Link Text');
});