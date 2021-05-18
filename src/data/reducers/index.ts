import { combineReducers } from '../utilities';
import { StoreState } from '../store';

import gameReducer from './game';
import resourcesReducer from './resources';
import buildingsReducer from './buildings';
import messagesReducer from './messages';
import settingsReducer from './settings';

const rootReducer = combineReducers<StoreState>([
  gameReducer,
  resourcesReducer,
  buildingsReducer,
  messagesReducer,
  settingsReducer,
]);

export default rootReducer;
