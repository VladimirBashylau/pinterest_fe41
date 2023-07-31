import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions/posts";
import type { PayloadAction } from "@reduxjs/toolkit";

// const initialState = {
//   posts: [],
//   loading: false,
//
//   count: null,
// };
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
  reducers: {
    addPhoto(
      state,
      action: PayloadAction<{ title: string; imageSrc: string; text: string }>
    ) {
      state.posts.unshift({
        id: Date.now(),
        title: action.payload.title,
        text: action.payload.text,
        url: action.payload.imageSrc,
      });
    },
  },
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
export const { addPhoto } = postSlice.actions;
export const postsReducer = postSlice.reducer;
