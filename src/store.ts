import { Action, AnyAction, configureStore, Reducer } from '@reduxjs/toolkit';

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

const store = configureStore<StoreState>({
  reducer: customCombineReducers<StoreState>([
    gameReducer,
    resourcesReducer,
    buildingsReducer,
    messagesReducer,
    settingsReducer,
  ]),
  preloadedState: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
