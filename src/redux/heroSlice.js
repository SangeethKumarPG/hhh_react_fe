import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchHeroAPI } from "../services/heroAPI";

export const fetchHero = createAsyncThunk(
  "hero/fetchHero",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchHeroAPI();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const heroSlice = createSlice({
  name: "categories",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHero.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHero.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        console.log("cat", action.payload);
        // toast.success("Categories fetched successfully");
      })
      .addCase(fetchHero.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export default heroSlice.reducer;
