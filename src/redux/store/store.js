import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import errorSlice from "../slices/error.slice";
import recordSlice from "../slices/record.slice";

const reducer = combineReducers({
  record: recordSlice,
  error: errorSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["record"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
