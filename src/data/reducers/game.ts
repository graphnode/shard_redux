import { Action } from 'redux';
import { StoreState } from '../store';
import { createAction, createReducer } from '../utilities';
export interface Game {
  tick: number;
  tickSpeed: number;
}

const initialState : Game = {
  tick: 0,
  tickSpeed: 1000,
};

const init = createAction<boolean | undefined>('@@INIT');
const tick = createAction<{ delta: number }>('GAME_TICK');

const reducer = createReducer<StoreState, Action<string>>({
  '@@INIT'(state) {
    if (!state.game)
      state.game = initialState;
  },
  'GAME_TICK'(state) {
    state.game.tick++;
    state.resources.energy += state!.buildings.generators * 10;
    state.resources.mass += state!.buildings.harvesters * 1;
    state.resources.energy -= state!.buildings.harvesters * 1;
  },
});

export { init, tick };

export default reducer;
