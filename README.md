# react-flexer 

### flexbox grid layout like rebass, just faster. Built with [@quarkly/elementary](https://github.com/quarkly/elementary)

## Usage

```bash
$ npm i react-flexer
$ npm i styled-components
```

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Flex, Box } from 'react-flexer';

ReactDom.render(
  <Flex width={1 / 2}>
    <Box margin={3}>
      Box
    </Text>
  </Flex>,
  document.getElementById('root'),
);
```

## Props

#### Layout

- [display](https://github.com/quarkly/elementary/blob/master/docs/props.md#display)
- [height](https://github.com/quarkly/elementary/blob/master/docs/props.md#height)
- [minHeight](https://github.com/quarkly/elementary/blob/master/docs/props.md#minheight)
- [mixHeight](https://github.com/quarkly/elementary/blob/master/docs/props.md#maxheight)
- [width](https://github.com/quarkly/elementary/blob/master/docs/props.md#width)
- [minWidth](https://github.com/quarkly/elementary/blob/master/docs/props.md#minwidth)
- [maxWidth](https://github.com/quarkly/elementary/blob/master/docs/props.md#maxwidth)
- [size](https://github.com/quarkly/elementary/blob/master/docs/props.md#size)

#### Spaces

- [padding](https://github.com/quarkly/elementary/blob/master/docs/props.md#p)
- [paddingTop](https://github.com/quarkly/elementary/blob/master/docs/props.md#pt)
- [paddingRight / pr](https://github.com/quarkly/elementary/blob/master/docs/props.md#pr)
- [paddingBottom](https://github.com/quarkly/elementary/blob/master/docs/props.md#pb)
- [paddingLeft](https://github.com/quarkly/elementary/blob/master/docs/props.md#pl)
- [paddingX](https://github.com/quarkly/elementary/blob/master/docs/props.md#px)
- [paddingY](https://github.com/quarkly/elementary/blob/master/docs/props.md#py)
- [margin](https://github.com/quarkly/elementary/blob/master/docs/props.md#m)
- [marginTop](https://github.com/quarkly/elementary/blob/master/docs/props.md#mt)
- [marginRight](https://github.com/quarkly/elementary/blob/master/docs/props.md#mr)
- [marginBottom](https://github.com/quarkly/elementary/blob/master/docs/props.md#mb)
- [marginLeft](https://github.com/quarkly/elementary/blob/master/docs/props.md#ml)
- [marginX](https://github.com/quarkly/elementary/blob/master/docs/props.md#mx)
- [marginY](https://github.com/quarkly/elementary/blob/master/docs/props.md#my)

#### Flex

- [alignItems](https://github.com/quarkly/elementary/blob/master/docs/props.md#alignitems)
- [alignContent](https://github.com/quarkly/elementary/blob/master/docs/props.md#aligncontent)
- [justifyItems](https://github.com/quarkly/elementary/blob/master/docs/props.md#justifyitems)
- [justifyContent](https://github.com/quarkly/elementary/blob/master/docs/props.md#justifycontent)
- [flexWrap](https://github.com/quarkly/elementary/blob/master/docs/props.md#flexwrap)
- [flexBasis](https://github.com/quarkly/elementary/blob/master/docs/props.md#flexbasis)
- [flexDirection](https://github.com/quarkly/elementary/blob/master/docs/props.md#flexdirection)
- [flex](https://github.com/quarkly/elementary/blob/master/docs/props.md#flex)
- [order](https://github.com/quarkly/elementary/blob/master/docs/props.md#order)
