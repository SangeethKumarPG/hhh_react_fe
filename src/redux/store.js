import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import categoryReducer from './categorySlice';
import productReducer from './productSlice';
import productDetailsReducer from './productDetailsSlice';
import cartReducer from './cartSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories : categoryReducer,
    products : productReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer,
  },
});
