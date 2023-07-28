import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
    username: string | null;
    id: string | null;
    email: string | null;
  }

  const initialState: IUser = {
    username: null,
    id: null,
    email: null,
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