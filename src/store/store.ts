import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cart from "./cart/cartSlice";
import auth from "./auth/authSlice";
import orders from "./orders/orderSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
  whiteList: ["items"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["accessToken", "user"],
};

const rootReducer = combineReducers({
  orders,
  cart: persistReducer(cartPersistConfig, cart),
  auth: persistReducer(authPersistConfig, auth),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          PAUSE,
          PURGE,
          PERSIST,
          REGISTER,
          REHYDRATE,
          "toasts/addToast",
        ],
        ignoredPaths: [/^toasts\.records\.\d+\.onCloseToast$/],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export { store, persistor };
