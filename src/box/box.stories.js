import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Box from './index';
import Theme from '../theme';

const stories = storiesOf('Box', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Box height="200px" width="300px">
      Hello
    </Box>
  </Theme>
));
