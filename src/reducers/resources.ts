import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

import { init } from './game';

const changeValue = createAction<{ resource: keyof StoreState['resources'], value: number }>('resources/changeValue');

const initialValue = {
  energy: 0,
  mass: 500,
};

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state, { payload }) => {
      if (state.resources && !payload) return state;
      return { ...state, resources: initialValue };
    });
});

export { changeValue };

export default reducer;
