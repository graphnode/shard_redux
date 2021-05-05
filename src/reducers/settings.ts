import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

import { init } from './game';
import initialSettings, { Settings } from '../data/initialSettings';

const updateSettings = createAction<Settings>('settings/update');

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state, { payload }) => {
      if (state.settings && !payload) return state;
      return { ...state, settings: initialSettings };
    })
    .addCase(updateSettings, (state, action) => {
      return { ...state, settings: action.payload };
    });
});

export { updateSettings };

export default reducer;
