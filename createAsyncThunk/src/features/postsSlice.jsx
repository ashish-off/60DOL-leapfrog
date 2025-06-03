import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// get posts from API
export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("failed to fetch posts");
      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Failed to fetch posts");
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
});

export default postsSlice.reducer;
