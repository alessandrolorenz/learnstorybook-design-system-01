import React from 'react'
import { StoryLinkWrapper } from './StoryLinkWrapper';
import { userEvent, within } from '@storybook/testing-library'

import { ButtonNew } from './ButtonNew'
import { Icon } from './Icon'

export default {
  title: 'Design System/ButtonNew',
  component: ButtonNew,
}

export const AllButtonNew = (args) => (
  <div>
    <ButtonNew appearance="primary" size="small" {...args}>
      Primary
    </ButtonNew>
    <ButtonNew appearance="outline" size="small" containsIcon {...args}>
      <Icon icon="link" aria-label="Link" />
    </ButtonNew>
    <ButtonNew appearance="outline" size="small" {...args}>
      <Icon icon="link" />
      Link
    </ButtonNew>
  </div>
)

AllButtonNew.args = {
  isDisabled: false,
  isLoading: false,
  size: 'large',
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554',
  loadingText: '...Loading',
}

AllButtonNew.storyName = 'all ButtonNews'

 export const WithInteractions = () => (
     <ButtonNew
       ButtonWrapper={StoryLinkWrapper}
       appearance="primary"
       href="http://storybook.js.org">
         Button
      </ButtonNew>
   );
   WithInteractions.play = async ({ canvasElement }) => {
     // Assigns canvas to the component root element
     const canvas = within(canvasElement);
     await userEvent.click(canvas.getByRole("link"));
   };
  
   WithInteractions.storyName = "button with interactions"
