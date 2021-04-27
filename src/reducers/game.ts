import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

const init = createAction('@@INIT');
const tick = createAction('game/tick');

const initialState = {
  tick: 0,
};

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state, action) => {
      return { ...state, ...initialState };
    })
    .addCase(tick, (state, action) => {
      state.tick++;

      state.resources.energy -= 1;

      state.resources.energy += state.buildings.generators;
      state.resources.mass += state.buildings.harvesters;

      return state;
    });
});

export { tick };

export default reducer;
