import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Reducer/UserSlice'
import ProductsSlice from './Reducer/ProductsSlice'
import CartSlice from './Reducer/CartSlice'

export const store = configureStore({
  reducer: {
    users: UserSlice,
    products: ProductsSlice,
    cart: CartSlice 
  },
}) 