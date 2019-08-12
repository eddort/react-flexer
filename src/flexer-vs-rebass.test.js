import Enzyme, { render } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Flex, Box } from 'rebass/styled-components';

import { Flex as FlexerFlex, Box as FlexerBox } from './flex-box';

const Flexer = () => (
  <FlexerFlex>
    <FlexerBox m={3} />
  </FlexerFlex>
);

const Rebass = () => (
  <Flex>
    <Box m={3} />
  </Flex>
);

Enzyme.configure({ adapter: new Adapter() });

const banchIt = (calls, fn) => {
  const dateStart = new Date();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < calls; i++) {
    fn();
  }
  return new Date() - dateStart;
};

it('Pure render time', () => {
  const rabass = banchIt(500, () => render(<Rebass />));
  const flexer = banchIt(500, () => render(<Flexer />));

  console.log('Rebass:', rabass);
  console.log('Flexer:', flexer);
  expect(rabass).toBeGreaterThan(flexer);
});
