import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsService } from "../services/posts";

export const fetchPosts = createAsyncThunk(
  "user/fetchPosts",
  async (pin: number) => {
    const { data } = await postsService.getAll(pin);
    return {
      results: data.results,
    };
  }
);
