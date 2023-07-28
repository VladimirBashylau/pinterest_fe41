import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions/posts";

const initialState = {
  posts: [],
  loading: false,
  error: "",
  count: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload.results;
      state.count = action.payload.count;
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
