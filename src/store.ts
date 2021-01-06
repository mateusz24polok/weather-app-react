import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "./slices/WeatherSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
