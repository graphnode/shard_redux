import { StoreState } from '../store';
import { createReducer } from '../utilities';

const initialValue = {
  energy: 0,
  mass: 500,
};

const reducer = createReducer<StoreState>({
  '@@INIT'(state) {
    if (!state.messages)
      state.resources = initialValue;
  },
});

export default reducer;
