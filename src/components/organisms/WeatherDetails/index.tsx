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
import {
  selectWeather,
  selectLoadingState,
  selectErrorState,
} from "../../../slices/WeatherSlice";
import {
  getCelsiusTemperature,
  getFahrenheitTemperature,
} from "../../../helpers/temperatureFunctions";
import LoadingSpinner from "../../atoms/LoadingSpinner";

const WeatherDetails: React.FC = () => {
  const weather = useSelector(selectWeather);
  const loadingState = useSelector(selectLoadingState);
  const errorState = useSelector(selectErrorState);

  const weatherIconLink = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  const today = new Date().toDateString();

  return (
    <Container $loading={loadingState}>
      {loadingState ? (
        <LoadingSpinner />
      ) : (
        <>
          {errorState ? (
            <p>Error - something goes wrong (here should be Error component)</p>
          ) : (
            <>
              <City>
                {weather.city} {weather.country}
              </City>
              <IconAndTemperatureContainer>
                <WeatherIcon
                  IconLink={weatherIconLink}
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
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default WeatherDetails;
