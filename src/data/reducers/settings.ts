import { StoreState } from '../store';
import { createAction, createReducer, PayloadAction } from '../utilities';

export interface Settings {
  animations: 'on' | 'off';
  updateRate: number;
}

const initialState : Settings = {
  animations: 'on',
  updateRate: 100,
};

const updateSettings = createAction<Settings>('UPDATE_SETTINGS');

const reducer = createReducer<StoreState, PayloadAction<Settings>>({
  '@@INIT'(state) {
    if (!state.settings)
      state.settings = initialState;
  },
  'UPDATE_SETTINGS'(state, { payload }) {
    state.settings = payload;
  },
});

export { updateSettings };

export default reducer;
