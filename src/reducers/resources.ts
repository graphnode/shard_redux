import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

const init = createAction('@@INIT');
const changeValue = createAction<{ resource: keyof StoreState['resources'], value: number }>('resources/changeValue');

const initialValue = {
  energy: 0,
  mass: 500,
};

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state, action) => {
      if (state.resources) return state;
      return { ...state, resources: initialValue };
    });
});

export { changeValue };

export default reducer;
