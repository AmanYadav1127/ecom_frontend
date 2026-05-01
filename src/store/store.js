import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/reducers/ProductReducer";
import { errorReducer } from "./reducers/reducers/errorReducer";

export const store = configureStore({
    reducer: { products:ProductReducer,
        errors:errorReducer,
    },
    preloadedState: {},
});

export default store;