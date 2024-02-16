import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { paymentData } from './payment';

const paymentDataAdapter = createEntityAdapter();

const SLICE_NAME = 'paymentData';

const initialState = paymentDataAdapter.getInitialState({
  paymentData,
});
export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    paymentCreate: (state, action) => {
      paymentDataAdapter.addOne(state, action.payload);
    },
  },
});

export default reducer;

export const { paymentCreate } = actions;
