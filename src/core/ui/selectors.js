import { createSelector } from 'reselect';

export function getUI(state) {
  return state.ui;
}

export function getPalette(state) {
  return getUI(state).palette;
}