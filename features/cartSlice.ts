import { Products } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    } as Products,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        removeFromCart: (state, action) => {
            // send already exists product 
            const id = action.payload;
            // Filter
            state.cart = state.cart.filter(e => e.id !== id)
        }
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;