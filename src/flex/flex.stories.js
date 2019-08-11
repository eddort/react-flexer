import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../theme';
import Flex from './index';

const stories = storiesOf('Flex', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Flex />
  </Theme>
));
