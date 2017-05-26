import * as types from './action-types';

export function setPalette(palette) {
  return {
    type: types.SET_PALETTE,
    payload: palette,
  }
}

export function setColor(color, index) {
  return {
    type: types.CREATE_TASK_ERROR,
    payload: { color, index }
  };
}
