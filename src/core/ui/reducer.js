import * as types from './action-types';
import { filter } from 'lodash';

const uiState = () => ({
  palette: ['#c09cf6','#ed9cf6','#f69cd2','#f69ca5','#f6c09c'],
});

export function uiReducer(state = uiState(), {payload, type}) {
  switch (type) {
    case types.SET_PALETTE:
      return Object.assign({}, state, {
        palette: payload,
      });

    case types.SET_COLOR:
      return Object.assign({}, state, {
        palette: [
          ...state.palette.slice(0, payload.index),
          payload.color,
          ...state.palette.slice(payload.index + 1)
        ]
      });

    default: 
      return state;

  }
}