import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrderAPI } from "../services/orderAPI";
import { toast } from "react-toastify";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchOrderAPI();
      console.log("my orders", response);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const orderSlice = createSlice({
  name: "categories",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        console.log("cat", action.payload);
        // toast.success("Categories fetched successfully");
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export default orderSlice.reducer;
