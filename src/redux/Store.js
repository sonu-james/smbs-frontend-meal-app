// store.js or store/index.js

import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slice/WishListSlice"; // This is the correct import

const store = configureStore({
  reducer: {
    wishlistReducer, // This is now a valid reducer
  }
});

export default store;
