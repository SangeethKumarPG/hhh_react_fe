import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCartAPI,
  updateQuantityAPI,
  removeFromCartAPI,
  addProductToCartAPI,
} from "../services/cartAPI";
import { toast } from "react-toastify";

export const addToCartThunk = createAsyncThunk(
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

export const fetchCart = createAsyncThunk(
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

export const updateCartQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, quantity }, thunkAPI) => {
    try {
      const response = await updateQuantityAPI(id, quantity);
      if (response.status === 200) return response.data;
      return thunkAPI.rejectWithValue(
        response.response?.data || "Failed to update quantity"
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeCartItem = createAsyncThunk(
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

export const buyNowThunk = createAsyncThunk(
  "cart/buyNow",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const existingCart = await fetchCartAPI();
      if (existingCart.status === 200 && Array.isArray(existingCart.data)) {
        for (let item of existingCart.data) {
          await removeFromCartAPI(item?.id);
        }
      }

      const response = await addProductToCartAPI(productId, quantity);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to process buy now"
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });

    builder
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        state.items = state.items.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(action.payload);
      });

    builder
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(action.payload);
      });

    builder
      .addCase(addToCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.loading = false;

        const newItem = action.payload;
        const existingIndex = state.items.findIndex(
          (item) => item.product.id === newItem.product.id
        );
        if (existingIndex >= 0) {
          state.items[existingIndex] = newItem;
        } else {
          state.items.push(newItem);
        }
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });
    builder
      .addCase(buyNowThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(buyNowThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [action.payload];
      })
      .addCase(buyNowThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export default cartSlice.reducer;
