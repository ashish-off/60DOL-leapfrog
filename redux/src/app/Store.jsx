import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Slice';

const store = configureStore({
  reducer: {
    counter : counterReducer,
  }
});

export default store;