import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherError,
} from "../slices/WeatherSlice";
import { getWeather } from "../api/api";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchWeatherWorker(action: PayloadAction<string>) {
  try {
    console.log(action.payload);
    const weather = yield call(getWeather, action.payload);
    yield delay(500);
    yield put(fetchWeatherSuccess(weather));
  } catch (error) {
    yield put(fetchWeatherError);
    console.error(error);
  }
}

export function* weatherSaga() {
  yield takeLatest(fetchWeather.type, fetchWeatherWorker);
}
