import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search:'closed'
}

const SearchReducer = createSlice({
    name:'login',
    initialState,
    reducers: {
        SetSearchState(state, action){
            state.search = action.payload;
        },
    },
})

export const {SetSearchState} = SearchReducer.actions;
export default SearchReducer.reducer;