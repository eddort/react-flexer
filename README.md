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
  <Flex w={1/2}>
    <Box m={3}>
      Box
    </Box>
  </Flex>,
  document.getElementById('root'),
);
```

## Props

#### Layout

- [display / d](https://github.com/quarkly/elementary/blob/master/docs/props.md#display)
- [height / h](https://github.com/quarkly/elementary/blob/master/docs/props.md#height)
- [minHeight / mih](https://github.com/quarkly/elementary/blob/master/docs/props.md#minheight)
- [mixHeight / mah](https://github.com/quarkly/elementary/blob/master/docs/props.md#maxheight)
- [width / w](https://github.com/quarkly/elementary/blob/master/docs/props.md#width)
- [minWidth / miw](https://github.com/quarkly/elementary/blob/master/docs/props.md#minwidth)
- [maxWidth / maw](https://github.com/quarkly/elementary/blob/master/docs/props.md#maxwidth)
- [size](https://github.com/quarkly/elementary/blob/master/docs/props.md#size)

#### Spaces

- [padding / p](https://github.com/quarkly/elementary/blob/master/docs/props.md#p)
- [paddingTop / pt](https://github.com/quarkly/elementary/blob/master/docs/props.md#pt)
- [paddingRight / pr](https://github.com/quarkly/elementary/blob/master/docs/props.md#pr)
- [paddingBottom / pb](https://github.com/quarkly/elementary/blob/master/docs/props.md#pb)
- [paddingLeft / pl](https://github.com/quarkly/elementary/blob/master/docs/props.md#pl)
- [paddingX / px](https://github.com/quarkly/elementary/blob/master/docs/props.md#px)
- [paddingY / py](https://github.com/quarkly/elementary/blob/master/docs/props.md#py)
- [margin / m](https://github.com/quarkly/elementary/blob/master/docs/props.md#m)
- [marginTop / mt](https://github.com/quarkly/elementary/blob/master/docs/props.md#mt)
- [marginRight / mr](https://github.com/quarkly/elementary/blob/master/docs/props.md#mr)
- [marginBottom / mb](https://github.com/quarkly/elementary/blob/master/docs/props.md#mb)
- [marginLeft / ml](https://github.com/quarkly/elementary/blob/master/docs/props.md#ml)
- [marginX / mx](https://github.com/quarkly/elementary/blob/master/docs/props.md#mx)
- [marginY / my](https://github.com/quarkly/elementary/blob/master/docs/props.md#my)

#### Flex

- [alignItems / ai](https://github.com/quarkly/elementary/blob/master/docs/props.md#alignitems)
- [alignContent / ac](https://github.com/quarkly/elementary/blob/master/docs/props.md#aligncontent)
- [justifyItems / ji](https://github.com/quarkly/elementary/blob/master/docs/props.md#justifyitems)
- [justifyContent / jc](https://github.com/quarkly/elementary/blob/master/docs/props.md#justifycontent)
- [flexWrap / fxw](https://github.com/quarkly/elementary/blob/master/docs/props.md#flexwrap)
- [flexBasis / fxb](https://github.com/quarkly/elementary/blob/master/docs/props.md#flexbasis)
- [flexDirection / fxd](https://github.com/quarkly/elementary/blob/master/docs/props.md#flexdirection)
- [flex / fx](https://github.com/quarkly/elementary/blob/master/docs/props.md#flex)
- [order / ord](https://github.com/quarkly/elementary/blob/master/docs/props.md#order)
