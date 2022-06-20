import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './index';

storiesOf('Components/Button', module)
  .add('Default', () => <Button primary w="120px">Primary</Button>)
  .add('outlined', () => <Button outlined w="120px">Outline</Button>)
  .add('outlinedBold', () => <Button outlinedBold w="120px">Bold</Button>)
  .add('Disabled', () => <Button w="120px" outlined disabled>Button</Button>)
  .add('outlinedBoldDisabled', () => <Button outlinedBold w="120px" disabled>Bold</Button>)
  .add('Loading', () => <Button isLoading={true} primary w="120px">Primary</Button>)

