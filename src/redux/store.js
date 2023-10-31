import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage/session';
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/lib/persistStore'
import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlice'
import ordersReducer from '../redux/orders/ordersSlice'

const reducers = combineReducers({
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user']
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware ({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)