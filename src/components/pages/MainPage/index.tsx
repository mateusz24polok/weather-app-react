import React, { useEffect } from "react";
import { BackgroundColor, BackgroundImage } from "./styled";
import WeatherBackgroundImage from "../../../assets/images/weather_background.jpg";
import WeatherDetails from "../../organisms/WeatherDetails";
import Title from "../../atoms/Title";
import SearchInput from "../../atoms/SearchInput";
import { fetchWeather } from "../../../slices/WeatherSlice";
import { useDispatch } from "react-redux";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("Melbourne"));
  }, []);
  
  return (
    <div>
      <Title title="The Weather App" />
      <SearchInput />
      <WeatherDetails />
      <BackgroundImage
        src={WeatherBackgroundImage}
        alt="weather background image"
      />
      <BackgroundColor />
    </div>
  );
};

export default MainPage;
