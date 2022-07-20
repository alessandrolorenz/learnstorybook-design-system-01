"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controls = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = require("./Avatar");

var _default = {
  title: "Design System/Avatar",
  component: _Avatar.Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['tiny', 'small', 'medium', 'large']
    },
    loading: {
      control: {
        type: 'select'
      },
      options: [true, false]
    }
  },
  parameters: {
    componentSubtitle: 'Displays an image that represents a user or organization'
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, args);
};

var Controls = Template.bind({}); // /*
//  * More on args at:
//  * https://storybook.js.org/docs/react/writing-stories/args
//  */
// Controls.args = {
//   loading: false,
//   size: 'tiny',
//   username: 'Dominic Nguyen',
//   src: 'https://avatars2.githubusercontent.com/u/263385',
// };
// export const Standard = (args) => <Avatar {...args} />;
// Standard.args = {
//   size: "large",
//   username: "Tom Coleman",
//   src: "https://avatars2.githubusercontent.com/u/132554",
// };
// export const Sizes = (args) => (
//   <div>
//     <Avatar {...args} size="large" />
//     <Avatar {...args} size="medium" />
//     <Avatar {...args} size="small" />
//     <Avatar {...args} size="tiny" />
//   </div>
// );
// Sizes.args = {
//   username: "Tom Coleman",
//   src: "https://avatars2.githubusercontent.com/u/132554",
// };
// Sizes.parameters = {
//     docs: {
//       // The story now contains a description
//       storyDescription: '4 sizes are supported.',
//     },
//   };
// export const Initials = (args) => (
//   <div>
//     <Avatar username="Tom Coleman" />
//     <Avatar username="Dominic Nguyen" />
//     <Avatar username="Kyle Suss" />
//     <Avatar username="Michael Shilman" />
//   </div>
// );
// export const Loading = (args) => (
//     <div>
//       <Avatar {...args} size="large" />
//       <Avatar {...args} size="medium" />
//       <Avatar {...args} size="small" />
//       <Avatar {...args} size="tiny" />
//     </div>
//   );
//   Loading.args = {
//     loading: true,
//   };
// export const Large = (args) => (
//   <div>
//     <Avatar loading size="large" />
//     <Avatar size="large" username="Tom Coleman" />
//     <Avatar
//       size="large"
//       username="Tom Coleman"
//       src="https://avatars2.githubusercontent.com/u/132554"
//     />
//   </div>
// );

exports.Controls = Controls;