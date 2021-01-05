import React from "react";
import { BackgroundColor, BackgroundImage } from "./styled";
import WeatherBackgroundImage from "../../../assets/images/weather_background.jpg";

interface MainPageProps {
  children: React.ReactChild;
}

const MainPage: React.FC<MainPageProps> = ({ children }) => {
  return (
    <div>
      {children}
      <BackgroundImage
        src={WeatherBackgroundImage}
        alt="weather background image"
      />
      <BackgroundColor />
    </div>
  );
};

export default MainPage;
