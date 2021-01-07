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

    fetchWeather: (state) => {
      state.loading = true;
    },

    fetchWeatherSuccess: (state, action: PayloadAction<any>) => {
      state.city = "";
      state.error = false;
      state.loading = false;
      state.weather = {
        city: action.payload?.name,
        country: action.payload?.country,
        description: action.payload?.weather[0]?.description,
        humidity: action.payload?.main?.humidity,
        icon: action.payload?.weather[0]?.icon,
        temperature: action.payload?.main?.temp,
        windSpeed: action.payload?.wind?.speed,
      };
    },

    fetchWeatherError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const selectWeatherSliceState = (state: RootState) => state.weather;
export const selectInputCity = (state: RootState) =>
  selectWeatherSliceState(state).city;

export const {
  typeCity,
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherError,
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
