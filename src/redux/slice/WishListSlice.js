// slice/WishListSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: 'wishlistSlice',
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            const id = action.payload.id || action.payload.idMeal; // <-- fallback
            const exists = state.find(item => (item.id || item.idMeal) === id);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            return state.filter(item => (item.id || item.idMeal) !== action.payload);
        },

    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer; // ✅ Make sure this is the default export
