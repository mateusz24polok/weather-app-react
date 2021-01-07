import { takeLatest, select, call, put } from "redux-saga/effects";
import {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherError,
  selectInputCity,
} from "../slices/WeatherSlice";
import { getWeather } from "../api/api";

function* fetchWeatherWorker() {
  try {
    const city = yield select(selectInputCity);
    const weather = yield call(getWeather, city);
    yield put(fetchWeatherSuccess(weather));
  } catch (error) {
    yield put(fetchWeatherError);
    console.error(error);
  }
}

export function* weatherSaga() {
  yield takeLatest(fetchWeather.type, fetchWeatherWorker);
}
