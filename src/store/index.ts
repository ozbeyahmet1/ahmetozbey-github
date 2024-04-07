import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or another storage method
import backgroundReducer from "./slices/backgroundSlice";


const persistConfig = {
  key: "root",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  storage,

};

const persistedReducer = persistReducer(persistConfig, backgroundReducer);

export const store = configureStore({
  reducer: {
    searchModalToggle: persistedReducer,
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

export const backgroundSetter = (state: RootState) => state.searchModalToggle;



