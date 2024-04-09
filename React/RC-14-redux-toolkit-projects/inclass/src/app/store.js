import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import productReducer from '../features/products/productSlice'

export const store = configureStore({
    reducer: {
        auth:authReducer,
        products:productReducer,
    },
    devTools: process.env.NODE_ENV !== "production"
    //? eger gelistirme asamasi production ise o zaman yukaridaki ifade false dondurur ve dolayisiyla devTool kullanima kapali olur.
})
