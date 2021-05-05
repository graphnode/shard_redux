import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

import initialState from '../data/initialGame';

const init = createAction<boolean>('@@INIT');
const tick = createAction<number>('game/tick');

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state, { payload }) => {
      if (state.game && !payload) return state;
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

export { init, tick };

export default reducer;
