import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/lib/persistStore'
import cartReducer from './cart/cartSlice'

const reducers = combineReducers({
    cart: cartReducer,
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)