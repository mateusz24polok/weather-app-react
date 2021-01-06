import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "./slices/WeatherSlice";
import createSaga from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

const saga = createSaga();

export const store = configureStore({
  reducer: {
    weather: WeatherSlice,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
