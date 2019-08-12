import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../theme';
import { Flex, Box } from './index';

const stories = storiesOf('Flex', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Flex width={500} justifyContent="space-between">
      <Box>Hello</Box>
      <Box>from</Box>
      <Box>react-flexer</Box>
    </Flex>
  </Theme>
));
