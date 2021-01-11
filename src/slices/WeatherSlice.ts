import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather, Error } from "../types/types";
import { RootState } from "../store";

interface stateType {
  error: Error;
  loading: boolean;
  city: string;
  weather: Weather;
}

const initialState: stateType = {
  error: {
    errorState: false,
    errorCity: "",
  },
  loading: false,
  city: "",
  weather: {
    city: null,
    country: null,
    description: null,
    humidity: null,
    icon: null,
    temperature: null,
    windSpeed: null,
  },
};

const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    typeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },

    fetchWeather: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },

    fetchWeatherSuccess: (state, action: PayloadAction<any>) => {
      state.city = "";
      state.error.errorState = false;
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

    fetchWeatherError: (state, action: PayloadAction<string>) => {
      state.error.errorState = true;
      state.error.errorCity = action.payload;
      state.loading = false;
      state.city = "";
    },
  },
});

export const selectWeatherSliceState = (state: RootState) => state.weather;
export const selectInputCity = (state: RootState) =>
  selectWeatherSliceState(state).city;
export const selectWeather = (state: RootState) =>
  selectWeatherSliceState(state).weather;
export const selectLoadingState = (state: RootState) =>
  selectWeatherSliceState(state).loading;
export const selectErrorState = (state: RootState) =>
  selectWeatherSliceState(state).error.errorState;
export const selectErrorCity = (state: RootState) =>
  selectWeatherSliceState(state).error.errorCity;

export const {
  typeCity,
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherError,
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
