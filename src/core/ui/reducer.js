import * as types from './action-types';
import { filter } from 'lodash';

const uiState = () => ({
  palette: ['#169E7D','#4BAE95','#81BEAD','#B6CDC4','#EBDDDC'],
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