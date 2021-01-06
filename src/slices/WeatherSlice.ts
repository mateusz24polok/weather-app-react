import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { RootState } from "../store";

interface stateType {
  error: boolean;
  loading: boolean;
  city: string;
  weather: {} | Weather;
}

const initialState: stateType = {
  error: false,
  loading: false,
  city: "",
  weather: {},
};

const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    typeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const selectWeatherSliceState = (state: RootState) => state.weather;
export const selectInputCity = (state: RootState) => selectWeatherSliceState(state).city;

export const { typeCity } = WeatherSlice.actions;

export default WeatherSlice.reducer;
