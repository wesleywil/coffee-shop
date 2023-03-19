import { configureStore } from "@reduxjs/toolkit";
import utilsReducer from "./utils/utils";
import productsReducer from "./products/products";
import accountsReducer from "./accounts/accounts";
import tablesReducer from "./tables/tables";
import reservationsReducer from "./reservations/reservations";


export const store = configureStore({
    reducer:{
        utils:utilsReducer,
        products:productsReducer,
        accounts:accountsReducer,
        tables:tablesReducer,
        reservations:reservationsReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;