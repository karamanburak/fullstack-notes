import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating:number;
    stock:number;
    brand:string;
    category: string;
    thumbnail:string;
    images: string[];

}

// Define a type for the slice state
interface ProductsState {
loading: boolean,
error: boolean,
favorites: Product[];
productsList: Product[]; 

}

// Define the initial state using that type
const initialState: ProductsState = {
loading: false,
error: false,
favorites: [],
productsList:[],
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.products.value;

export default productsSlice.reducer;
