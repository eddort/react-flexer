import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './default';

export default props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
