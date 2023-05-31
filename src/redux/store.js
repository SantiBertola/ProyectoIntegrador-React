import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/CategoriesSlice";
import productsReducer from "./products/ProductsSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore"


const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
})


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)




export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)




