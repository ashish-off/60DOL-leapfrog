import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { all } from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts/",
});

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

// update post
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const res = await API.put(`/${id}`, updatedData);
      return res.data;
    } catch (error) {
      console.error("Error updating post:", error);
      return rejectWithValue(error.message || "Failed to update post");
    }
  }
);

// delete post
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { rejectWithValue }) => {
    try {
      await API.delete(`${id}`);
      return { id };
    } catch (error) {
      console.error("Error deleting post : ", error);
      return rejectWithValue(error.message || "Failed to delete post");
    }
  }
);

// create posts

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost, { rejectWithValue }) => {
    try {
      const res = await API.post("/", newPost);
      const data = res.data;

      // JSONPlaceholder returns id: 101 always so we overwrite it with unique local ID
      return {
        ...data,
        id: Date.now(),
      };
    } catch (error) {
      console.error("Error creating post:", error);
      return rejectWithValue(error.message || "Failed to create post");
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
  extraReducers: (builder) => {
    builder
      // read operation / get posts
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // update operation / update post
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        const filterPost = state.posts.filter(
          (post) => post.id != action.payload.id
        );
        state.posts = filterPost;

        // const index = state.posts.findIndex((post) => post.id === action.payload.id)
        // state.posts.splice(index, 1);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        const post = action.payload;
        // Avoid duplicate ID injection
        const alreadyExists = state.posts.some((p) => p.id === post.id);
        if (!alreadyExists) {
          state.posts.unshift(post);
        }
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postsSlice.reducer;