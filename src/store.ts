import { Action, AnyAction, configureStore, Reducer } from '@reduxjs/toolkit';

import gameReducer from './reducers/game';
import resourcesReducer from './reducers/resources';
import buildingsReducer from './reducers/buildings';
import messagesReducer from './reducers/messages';

export interface StoreState {
  tick: number;
  messages: string[];
  resources: {
    mass: number;
    energy: number;
  },
  buildings: {
    harvesters: number;
    generators: number;
  }
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
  ]),
  preloadedState: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
