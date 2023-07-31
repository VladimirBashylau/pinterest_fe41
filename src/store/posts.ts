import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsService } from "../services/posts";

export const fetchPosts = createAsyncThunk("user/fetchPosts", async () => {
  const { data } = await postsService.getAll();
  return {
    results: data.results,
  };
});
