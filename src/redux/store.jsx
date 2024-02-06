import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import carritoReducer from "./carrito/carritoSlice.jsx"
import authReducer from "./auth/authSlice.jsx"

const reducers = combineReducers({
    carrito: carritoReducer,
    auth: authReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","carrito"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
})
});

export const persistor = persistStore(store);
