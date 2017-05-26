import React from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2'

import { getPalette } from '../core/ui';

const StyledColorBlock = styled.div`
  height: 100%;
  flex: auto;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: flex-end;
  font-weight: bold;
  text-transform: uppercase;
  ${props => `
    background: ${props.color};
    color: ${props.isDark ? tinycolor(props.color).lighten(25) : tinycolor(props.color).darken(25)};
  `};
`

class ColorBlock extends React.PureComponent {

  render() {
    const { color } = this.props;
    const isDark = tinycolor(color).isDark();

    return (
      <StyledColorBlock color={color} isDark={isDark}>
        {color}
      </StyledColorBlock>
    )
  }
}

export default ColorBlock;