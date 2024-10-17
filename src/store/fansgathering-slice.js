import { createSlice } from '@reduxjs/toolkit';

const fansGatheringSlice = createSlice({
  name: 'fansGathering',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export default fansGatheringSlice.reducer
export const { increment, decrement, incrementByAmount } = fansGatheringSlice.actions;