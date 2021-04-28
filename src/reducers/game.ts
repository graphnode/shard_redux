import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

import initialState from '../data/initialGame';

const init = createAction('@@INIT');
const tick = createAction<number>('game/tick');

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state) => {
      if (state.game) return state;
      return { ...state, game: initialState };
    })
    .addCase(tick, (state) => {
      state.game.tick++;

      state.resources.energy += state.buildings.generators * 10;
      state.resources.mass += state.buildings.harvesters * 1;

      state.resources.energy -= state.buildings.harvesters * 1;

      return state;
    });
});

export { tick };

export default reducer;
