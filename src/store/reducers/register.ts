import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    register:'closed',
}

const registerReducer = createSlice({
    name:'register',
    initialState,
    reducers: {
        SetRegister(state, action){
            state.register = action.payload;
        },
    },
});

export const {SetRegister} = registerReducer.actions;
export default registerReducer.reducer;