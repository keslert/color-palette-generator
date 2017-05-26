import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import ColorBlock from './color-block';
import $ from 'jquery';
import tinycolor from 'tinycolor2';

import { getPalette, setPalette } from '../core/ui';

const StyledPalette = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`


class Palette extends React.PureComponent {
  componentDidMount() {
    $(document).on('keydown', e => {
      const tag = e.target.tagName.toLowerCase();
      if(tag === 'input' || tag === 'textarea') {
        return;
      }

      if(e.which === 32) {
        this.updatePalette();
      }
    })
  }

  componentWillUnmount() {
    $(document).off();  
  }

  updatePalette() {
    const { setPalette } = this.props;
    const color1 = tinycolor.random();
    const color2 = tinycolor.random();

    const palette = [
      color1.toHexString(),
      tinycolor.mix(color1, color2, 25).toHexString(),
      tinycolor.mix(color1, color2, 50).toHexString(),
      tinycolor.mix(color1, color2, 75).toHexString(),
      color2.toHexString(),
    ]
    setPalette(palette);
  }

  render() {
    const { palette } = this.props;

    return (
      <StyledPalette>
        {palette.map((color, i) => (
          <ColorBlock color={color} key={i} />
        ))}
      </StyledPalette>
    )
  }
}

const mapStateToProps = createSelector(
  getPalette,
  (palette) => ({
    palette,
  })
)
const mapDispatchToProps = Object.assign({setPalette});
export default connect(mapStateToProps, mapDispatchToProps)(Palette);