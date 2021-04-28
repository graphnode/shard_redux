import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

const init = createAction('@@INIT');

const initialState = {
  messages: ['Welcome to shard.'],
};

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state, action) => {
      if (state.messages) return state;
      return { ...state, ...initialState };
    });
});

export default reducer;
