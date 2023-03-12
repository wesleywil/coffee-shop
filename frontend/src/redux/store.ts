import { configureStore } from "@reduxjs/toolkit";
import utilsReducer from "./utils/utils";
import productsReducer from "./products/products";
import AccountsReducer from "./accounts/accounts";


export const store = configureStore({
    reducer:{
        utils:utilsReducer,
        products:productsReducer,
        accounts:AccountsReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;