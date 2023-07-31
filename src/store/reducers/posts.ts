import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../posts";

export interface IPhoto {
  id: number;
  title: string;
  text: string;
  url: string;
}

export interface IPhotoState {
  posts: IPhoto[];
  loading: boolean;
  error: string;
}

const initialState: IPhotoState = {
  posts: [],
  loading: false,
  error: "",
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload.results;
      state.loading = false;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.error = "error";
    });
  },
});

export const postsReducer = postSlice.reducer;
