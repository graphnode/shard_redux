import { Action, Reducer } from 'redux';
import produce from 'immer';
import { StoreState } from './store';

export interface PayloadAction<P, T = string> extends Action<T> {
  payload: P;
}

export const combineReducers = <S, A extends Action = any>(reducers : Reducer<S, A>[]) : Reducer<S, A> => {
  return (state : S | undefined, action : A) : S => {
    let currentState = state || {} as S;
    reducers.forEach((reducer) => {
      currentState = reducer(currentState, action);
    });
    return currentState;
  };
};

export const createAction = <P = void, T = string>(type: T) => {
  const fn = (payload: P) : PayloadAction<P, T> => ({ type, payload });
  fn.toString = () => type;
  return fn;
};

export const createReducer = <S, A extends Action = any>(obj : {[key: string]: (state : S, action : A) => void}) : Reducer<S, A> => {
  return produce((draft, action) => {
    if (action.type in obj) {
      obj[action.type](draft as S, action);
    }
  }, {} as S);
};

export const loadState = (key = 'state') : StoreState | undefined => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state : StoreState, key = 'state') => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch {
    // ignore write errors
  }
};
