import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showChat: false,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        showWindow: (state) => {
            state.showChat = true;
        },
        hideWindow: (state) => {
            state.showChat = false;
        },
    },
});

export const { showWindow , hideWindow } = chatSlice.actions;
export default chatSlice.reducer;
