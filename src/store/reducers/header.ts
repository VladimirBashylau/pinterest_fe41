import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    login: false,
}

const headerReducer = createSlice({
    name:'header',
    initialState,
    reducers:{
        setHeader(state,action){
            state.login = action.payload;
        }
    }
})

export const {setHeader} = headerReducer.actions;
export default headerReducer.reducer; 