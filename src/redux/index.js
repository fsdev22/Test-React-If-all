import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import userSliceReducer from "./slices/users/userSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConf = {
  key: "@session",
  storage,
  // whitelist: ["session"],
  // transforms: [createWhitelistFilter("session", ["authToken", "isLoggedIn"])],
};
const persistedReducer = persistReducer(persistConf, authSlice);

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store);

export default store;
export { persistor };
