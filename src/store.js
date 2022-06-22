import { configureStore } from '@reduxjs/toolkit';
import personSlice from './slices/personSlice';

const reducer = {
  person: personSlice,
};

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
