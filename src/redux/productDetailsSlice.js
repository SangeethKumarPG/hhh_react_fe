import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProductDetailsAPI,
  getProductMediaAPI,
} from "../services/productAPI";
import { toast } from "react-toastify";

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetchProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const res = await getProductDetailsAPI(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch product details"
      );
    }
  }
);

export const fetchProductMedia = createAsyncThunk(
  "productDetails/fetchProductMedia",
  async (id, { rejectWithValue }) => {
    try {
      const res = await getProductMediaAPI(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch product media"
      );
    }
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: null,
    media: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearProductDetails: (state) => {
      state.product = null;
      state.media = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })

      .addCase(fetchProductMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.media = action.payload;
      })
      .addCase(fetchProductMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { clearProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
