import React from "react";
import { BackgroundColor, BackgroundImage } from "./styled";
import WeatherBackgroundImage from "../../../assets/images/weather_background.jpg";
import WeatherDetails from "../../organisms/WeatherDetails";
import Title from "../../atoms/Title";
import SearchInput from "../../atoms/SearchInput";

const MainPage: React.FC = () => {
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
