import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    verify:false,
}

const verificationReducer = createSlice({
    name:'verification',
    initialState,
    reducers:{
        SetVerify(state:any,action){
            state.verify = action.payload;
        },
    },
});

export const {SetVerify} = verificationReducer.actions;
export default verificationReducer.reducer;
