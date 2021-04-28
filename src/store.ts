import { Action, AnyAction, configureStore, Reducer } from '@reduxjs/toolkit';
import throttle from 'lodash-es/throttle';

import gameReducer from './reducers/game';
import resourcesReducer from './reducers/resources';
import buildingsReducer from './reducers/buildings';
import messagesReducer from './reducers/messages';
import settingsReducer from './reducers/settings';

import { Game } from './data/initialGame';
import { Settings } from './data/initialSettings';

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

const customCombineReducers = <S, A extends Action = AnyAction>(reducers : Reducer<S, A>[]) : Reducer<S, A> => {
  return (state : S | undefined, action : A) : S => {
    let currentState = state || {} as S;
    reducers.forEach((reducer) => {
      currentState = reducer(currentState, action);
    });
    return currentState;
  };
};

const loadState = () : StoreState | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state : StoreState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};



const store = configureStore<StoreState>({
  reducer: customCombineReducers<StoreState>([
    gameReducer,
    resourcesReducer,
    buildingsReducer,
    messagesReducer,
    settingsReducer,
  ]),
  preloadedState: loadState() || {},
});

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 10000));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
