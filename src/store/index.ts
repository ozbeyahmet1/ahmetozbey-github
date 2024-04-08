import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or another storage method
import backgroundReducer from "./slices/backgroundSlice";
import favoritesReducer from "./slices/favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedBackgroundReducer = persistReducer(persistConfig, backgroundReducer);

export const store = configureStore({
  reducer: {
    background: persistedBackgroundReducer, // Use 'background'
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Selector functions should match the keys used in combineReducers
export const backgroundSelector = (state: RootState) => state.background;
