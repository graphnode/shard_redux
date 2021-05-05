import { createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

import { init } from './game';

const initialState = {
  messages: ['Welcome to shard.'],
};

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state, { payload }) => {
      if (state.messages && !payload) return state;
      return { ...state, ...initialState };
    });
});

export default reducer;
