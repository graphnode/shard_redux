import { StoreState } from '../store';
import { createAction, createReducer, PayloadAction } from '../utilities';

export interface Settings {
  animations: 'on' | 'off';
}

const initialState : Settings = {
  animations: 'on',
};

const updateSettings = createAction<Settings>('UPDATE_SETTINGS');

const reducer = createReducer<StoreState, PayloadAction<Settings>>({
  '@@INIT'(state) {
    if (!state.settings)
      state.settings = initialState;
  },
  // @ts-expect-error 2464
  [updateSettings](state, { payload }) {
    state.settings = payload;
  },
});

export { updateSettings };

export default reducer;
