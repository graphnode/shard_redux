import { createAction, createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../store';

type BuildingPayload = { building: keyof StoreState['buildings'], price: number, count?: number };

const init = createAction('@@INIT');
const buyBuilding = createAction<BuildingPayload>('buildings/buy');
const sellBuilding = createAction<BuildingPayload>('buildings/sell');

const initialValue = {
  generators: 0,
  harvesters: 0,
};

const reducer = createReducer<StoreState>({} as StoreState, (builder) => {
  builder
    .addCase(init, (state, action) => {
      if (state.buildings) return state;
      return { ...state, buildings: initialValue };
    })
    .addCase(buyBuilding, (state, { payload: { building, price, count = 1 } }) => {
      if (state.resources.mass < price)
        return state;

      state.resources.mass -= price;
      state.buildings[building] += count;

      state.messages.push(`You bought ${count} ${building}.`);

      return state;
    })
    .addCase(sellBuilding, (state, { payload: { building, price, count = 1 } }) => {
      if (state.buildings[building] === 0)
        return;

      state.resources.mass += price;
      state.buildings[building] -= count;

      state.messages.push(`You bought ${count} ${building}.`);

      return state;
    });
});

export { buyBuilding, sellBuilding };

export default reducer;
