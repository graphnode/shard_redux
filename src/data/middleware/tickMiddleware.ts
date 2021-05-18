import { Middleware, Dispatch, Action } from 'redux';
import { StoreState } from '../store';

const tickMiddleware : Middleware = (storeAPI) => {
  let timerId : ReturnType<typeof setTimeout>;

  return (next: Dispatch) => { // wrapDispatch
    return <A extends Action>(action: A) => { // handleAction
      if (action.type === 'GAME_TICK') {
        var state = storeAPI.getState() as StoreState;
        clearTimeout(timerId);
        timerId = setTimeout(() => storeAPI.dispatch({ type: 'GAME_TICK' }), state.game.tickSpeed);
      }

      return next(action);
    };
  };
};

export default tickMiddleware;
