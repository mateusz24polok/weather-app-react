import axios from "../axios/axiosInstance";

const key = "9846a286c520f631c0095b92d0ac8d0e";

export const getWeather = async (city: string) => {
  try {
    const weatherData = await axios.get(`weather?q=${city}&appid=${key}`);
    return weatherData;
  } catch (error) {
    console.error(error);
  }
};
