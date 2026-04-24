import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/reducers/ProductReducer";

export const store = configureStore({
    reducer: { products:ProductReducer,},
    preloadedState: {},
});

export default store;