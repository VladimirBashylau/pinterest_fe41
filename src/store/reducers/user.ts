import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
    id: string | null;
    email: string | null;
    username: string | null;
  }

  const initialState: IUser = {
    id: null,
    email: null,
    username:null,
  };

const userReducer = createSlice({
    name:'user',
    initialState,
    reducers: {
      SetUser(state,action) {
        state = action.payload;
      },
    },
  })


  export const {SetUser} = userReducer.actions;
  export default userReducer.reducer;