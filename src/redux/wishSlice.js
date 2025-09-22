import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchWishAPI,
  removeWishAPI,
  addProductToWishAPI,
} from "../services/wishAPI";
import { toast } from "react-toastify";

export const addToWishThunk = createAsyncThunk(
  "wishlist/addToWish",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await addProductToWishAPI(productId);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to add product to wishlist"
      );
    }
  }
);

export const fetchWish = createAsyncThunk(
  "wishlist/fetchWish",
  async (_, thunkAPI) => {
    try {
      const response = await fetchWishAPI();
      if (response.status === 200) return response.data;
      return thunkAPI.rejectWithValue(
        response.response?.data || "Failed to fetch wishlist"
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeWishItem = createAsyncThunk(
  "wishlist/removeWishItem",
  async (id, thunkAPI) => {
    try {
      const response = await removeWishAPI(id);
      console.log("remove res", response);
      if (response.status === 200) return id;
      return thunkAPI.rejectWithValue(
        response.response?.data || "Failed to remove wishlist item"
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToWishThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, action.payload];
        toast.success("Wishlist item added");
      })
      .addCase(addToWishThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });

    builder
      .addCase(removeWishItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeWishItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
        toast.success("Wishlist item removed");
      })
      .addCase(removeWishItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });

    builder
      .addCase(fetchWish.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWish.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        toast.success("Wishlist items fetched");
      })
      .addCase(fetchWish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error("some error happened");
      });
  },
});

export default wishSlice.reducer;
