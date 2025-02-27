import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";

import cart from "./cart/cartSlice";
import orders from "./orders/orderSlice";

// const cartPersistConfig = {
//   key: "cart",
//   storage,
//   whiteList: ["items"],
// };

export const store = configureStore({
  reducer: {
    orders,
    cart,

    // cart: persistReducer(cartPersistConfig, cart),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const persistor = persistStore(store);
// export { store, persistor };
