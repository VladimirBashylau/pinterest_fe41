import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

export interface ILogin {
    login: string;
}

const initialState = {
    login:'closed'
}

const loginReducer = createSlice({
    name:'login',
    initialState,
    reducers: {
        SetLogin(state, action){
            state.login = action.payload;
        },
    },
})

export const {SetLogin} = loginReducer.actions;
export default loginReducer.reducer;