import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../theme';
import Flex from './index';
import Box from '../box';

const stories = storiesOf('Flex', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Flex w={500} jc="space-between">
      <Box>Hello</Box>
      <Box>from</Box>
      <Box>react-flexer</Box>
    </Flex>
  </Theme>
));
