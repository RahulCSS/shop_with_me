import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import chatReducer from './ChatSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        chat: chatReducer,
    },
});

export default store;
