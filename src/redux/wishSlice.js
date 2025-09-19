import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCartAPI,
  //   updateQuantityAPI,
  removeFromCartAPI,
  addProductToCartAPI,
} from "../services/cartAPI";
import { toast } from "react-toastify";

export const addToWishThunk = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await addProductToCartAPI(productId, quantity);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to add product to cart"
      );
    }
  }
);

export const fetchWish = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    try {
      const response = await fetchCartAPI();
      if (response.status === 200) return response.data;
      return thunkAPI.rejectWithValue(
        response.response?.data || "Failed to fetch cart"
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeWishItem = createAsyncThunk(
  "cart/removeItem",
  async (id, thunkAPI) => {
    try {
      const response = await removeFromCartAPI(id);
      if (response.status === 204) return id;
      return thunkAPI.rejectWithValue(
        response.response?.data || "Failed to remove item"
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
        state.items = action.payload;
        toast.success("wishlist item added");
      })
      .addCase(removeWishItem.error, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        toast.error(action.payload);
      });
    builder
      .addCase(removeWishItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeWishItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        toast.success("wishlist item removed");
      })
      .addCase(removeWishItem.error, (state, action) => {
        state.loading = false;
        state.items = action.payload;
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
        toast.success("items fetched");
      })
      .addCase(fetchWish.error, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        toast.error(action.payload);
      });
  },
});

export default wishSlice.reducer;
