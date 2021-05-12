import { StoreState } from '../store';
import { createAction, createReducer, PayloadAction } from '../utilities';

type BuildingPayload = { building: keyof StoreState['buildings'], price: number, count?: number };

const buyBuilding = createAction<BuildingPayload>('BUY_BUILDING');
const sellBuilding = createAction<BuildingPayload>('SELL_BUILDING');

const initialValue = {
  generators: 0,
  harvesters: 0,
};

const reducer = createReducer<StoreState, PayloadAction<BuildingPayload>>({
  '@@INIT'(state) {
    if (!state.buildings)
      state.buildings = initialValue;
  },
  'BUY_BUILDING'(state, { payload: { building, price, count = 1 } }) {
    if (state.resources.mass < price)
      return;

    state.resources.mass -= price;
    state.buildings[building] += count;

    state.messages.push(`You built ${count} ${building}.`);
  },
  'SELL_BUILDING'(state, { payload: { building, price, count = 1 } }) {
    if (state!.buildings[building] === 0)
      return;

    state!.resources.mass += price;
    state!.buildings[building] -= count;

    state!.messages.push(`You recycled ${count} ${building}.`);
  },
});

export { buyBuilding, sellBuilding };

export default reducer;
