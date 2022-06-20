import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';


import { ButtonNew } from './ButtonNew';
import { Icon } from './Icon';

export const Standard = (args) => <ButtonNew {...args} />;
Standard.args = {
  size: "large",
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
};

export default {
  title: 'Design System/ButtonNew',
  component: ButtonNew,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium'],
    },
    appearance: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'tertiary', 'outline', 'primaryOutline', 'secondaryOutline'],
    },
  },
};

export const AllButtonNew = (args) => (
  <div>
    <ButtonNew appearance="primary" size="small" {...args}>Primary</ButtonNew>
    <ButtonNew appearance="outline" size="small" containsIcon {...args}>
      <Icon icon="link" aria-label="Link" />
    </ButtonNew>
    <ButtonNew appearance="outline" size="small" {...args}>
      <Icon icon="link" />
      Link
    </ButtonNew>
  </div>
);

AllButtonNew.args = {
  isDisabled: false,
  isLoading: false,
  size: "large",
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
  loadingText: "...Loading"
};

AllButtonNew.storyName= 'all ButtonNews';


