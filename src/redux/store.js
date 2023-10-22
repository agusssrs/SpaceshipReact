import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/lib/persistStore'
import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlice'
import reserveReducer from './cart/reserveSlice'


const reducers = combineReducers({
    cart: cartReducer,
    user: userReducer,
    reserve: reserveReducer
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user', 'reserve']
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware ({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)