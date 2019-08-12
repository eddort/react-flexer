import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../theme';
import { Flex, Box } from './index';

const stories = storiesOf('Flex', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Flex w={500} jc="space-between">
      <Box m={3}>Hello</Box>
      <Box mr={6}>from</Box>
      <Box>react-flexer</Box>
    </Flex>
  </Theme>
));
