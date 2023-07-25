import { createSlice } from "@reduxjs/toolkit";
  
export interface IUser {
    username: string | null;
    id: number | null;
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
      setUser(state,action) {
        state = action.payload;
      },
    },
  })
  
  
  export const {setUser} = userReducer.actions;
  export default userReducer.reducer ;
  