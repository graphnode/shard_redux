import { createStore, Store, AnyAction, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './utilities';

import rootReducer from './reducers';

import tickMiddleware from './middleware/tickMiddleware';

import { Game } from './reducers/game';
import { Settings } from './reducers/settings';

export interface StoreState {
  game: Game;
  messages: string[];
  resources: {
    mass: number;
    energy: number;
  },
  buildings: {
    harvesters: number;
    generators: number;
  },
  settings: Settings;
}

const store : Store<StoreState, AnyAction> = createStore(
  rootReducer,
  loadState() || {} as StoreState,
  composeWithDevTools(applyMiddleware(...[tickMiddleware])),
);

store.dispatch({ type: 'GAME_TICK' });
store.dispatch({ type: 'GAME_TICK' });
store.dispatch({ type: 'GAME_TICK' });
store.dispatch({ type: 'GAME_TICK' });

setInterval(() => {
  saveState(store.getState());
  store.dispatch({ type: '@@SAVE' });
}, 30000);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
