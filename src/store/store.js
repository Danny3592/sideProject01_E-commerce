import { configureStore } from '@reduxjs/toolkit';
import fansGatheringReducer from './fansgathering-slice'

const store = configureStore({
  reducer: {
    fansGathering: fansGatheringReducer,
  },
});

export default store;