import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity -= 1;
            }
        },
        clearCart: (state,action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = 0;
            }
        },
    },
});

export const { addItem, removeItem, clearCart, setProducts } = cartSlice.actions;
export default cartSlice.reducer;
