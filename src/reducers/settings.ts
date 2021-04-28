import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

import initialSettings, { Settings } from '../data/initialSettings';

const init = createAction('@@INIT');
const updateSettings = createAction<Settings>('settings/update');

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state, action) => {
      return { ...state, settings: initialSettings };
    })
    .addCase(updateSettings, (state, action) => {
      return { ...state, settings: action.payload };
    });
});

export { updateSettings };

export default reducer;
