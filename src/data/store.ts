import { createStore, Store, AnyAction, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash-es/throttle';

import gameReducer from './reducers/game';
import resourcesReducer from './reducers/resources';
import buildingsReducer from './reducers/buildings';
import messagesReducer from './reducers/messages';
import settingsReducer from './reducers/settings';

import { Game } from './reducers/game';
import { Settings } from './reducers/settings';
import { combineReducers, loadState, saveState } from './utilities';

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
  combineReducers<StoreState>([
    gameReducer,
    resourcesReducer,
    buildingsReducer,
    messagesReducer,
    settingsReducer,
  ]),
  loadState() || {} as StoreState,
  composeWithDevTools(
    applyMiddleware(...[]),
    // other store enhancers if any
  ),
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 10000));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
