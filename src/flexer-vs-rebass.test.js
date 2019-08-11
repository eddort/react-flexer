import Enzyme, { render } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Flex, Box } from 'rebass';

import FlexerFlex from './flex';
import FlexerBox from './box';

const Flexer = () => (
  <FlexerFlex>
    <FlexerBox />
  </FlexerFlex>
);

const Rebass = () => (
  <Flex>
    <Box />
  </Flex>
);

Enzyme.configure({ adapter: new Adapter() });

const banchIt = (times, cb) => {
  const dateStart = new Date();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < times; i++) {
    cb();
  }
  return new Date() - dateStart;
};

it('Rebass render time', () => {
  const timeDiff = banchIt(1000, () => render(<Rebass />));
  console.log(timeDiff, 'Rebass');
});

it('Flexer render time', () => {
  const timeDiff = banchIt(1000, () => render(<Flexer />));
  console.log(timeDiff, 'Flexer');
});
