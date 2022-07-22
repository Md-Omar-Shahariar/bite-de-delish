import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const res = await axios.get("https://bite-de-delish.herokuapp.com/allitems");

  return res.data;
});

const itemSlice = createSlice({
  name: "items",
  initialState: {
    loading: false,
    item: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.item = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.item = [];
      state.error = action.error.message;
    });
  },
});

export default itemSlice.reducer;
