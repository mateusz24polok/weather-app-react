import React from "react";
import WeatherIcon from "../../atoms/WeatherIcon";
import {
  Container,
  City,
  DetailsContainer,
  IconAndTemperatureContainer,
  Temperature,
  DetailsText,
  DetailsBox,
} from "./styled";
import { useSelector } from "react-redux";
import { selectWeather } from "../../../slices/WeatherSlice";
import {
  getCelsiusTemperature,
  getFahrenheitTemperature,
} from "../../../helpers/temperatureFunctions";

const WeatherDetails: React.FC = () => {
  const weather = useSelector(selectWeather);

  const sampleWeatherIconLink = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  const today = new Date().toDateString();

  return (
    <Container>
      <City>
        {weather.city} {weather.country}
      </City>
      <IconAndTemperatureContainer>
        <WeatherIcon
          IconLink={sampleWeatherIconLink}
          AltDescription="cloudy weather"
        />
        <Temperature>
          {`${getCelsiusTemperature(
            weather.temperature
          )}°C | ${getFahrenheitTemperature(weather.temperature)}°F`}
        </Temperature>
      </IconAndTemperatureContainer>
      <DetailsContainer>
        <DetailsBox>
          <DetailsText>Wind: {weather.windSpeed}</DetailsText>
          <DetailsText>Humidity: {weather.humidity} %</DetailsText>
        </DetailsBox>
        <DetailsBox>
          <DetailsText right>{today}</DetailsText>
          <DetailsText right>{weather.description}</DetailsText>
        </DetailsBox>
      </DetailsContainer>
    </Container>
  );
};

export default WeatherDetails;
