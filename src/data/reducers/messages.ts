import { StoreState } from '../store';
import { createReducer } from '../utilities';

const initialState = ['Welcome to shard.'];

const reducer = createReducer<StoreState>({
  '@@INIT'(state) {
    if (!state.messages)
      state.messages = initialState;
  },
});

export default reducer;
