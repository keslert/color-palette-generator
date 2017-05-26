import * as types from './action-types';

export function setPalette(palette) {
  return {
    type: types.SET_PALETTE,
    payload: palette,
  }
}

export function setColor(color, index) {
  return {
    type: types.SET_COLOR,
    payload: { color, index },
  };
}