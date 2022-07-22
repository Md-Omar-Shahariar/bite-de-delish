import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/allitem/itemSlice";

const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});
export default store;
