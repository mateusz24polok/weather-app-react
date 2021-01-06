import { takeLatest, select, call } from "redux-saga/effects";
import { fetchWeather, selectInputCity } from "../slices/WeatherSlice";
import { getWeather } from "../api/api";

function* fetchWeatherWorker() {
  const city = yield select(selectInputCity);
  const weather = yield call(getWeather, city);
  console.log(weather);
}

export function* weatherSaga() {
  yield takeLatest(fetchWeather.type, fetchWeatherWorker);
}
