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

const sampleWeatherIconLink = "http://openweathermap.org/img/wn/10d@2x.png";

const WeatherDetails: React.FC = () => {
  return (
    <Container>
      <City>Toronto, CA</City>
      <IconAndTemperatureContainer>
        <WeatherIcon
          IconLink={sampleWeatherIconLink}
          AltDescription="cloudy weather"
        />
        <Temperature>61°F | 32°C</Temperature>
      </IconAndTemperatureContainer>
      <DetailsContainer>
        <DetailsBox>
          <DetailsText>Wind: 2.1 mph</DetailsText>
          <DetailsText>Humidity: 77 %</DetailsText>
        </DetailsBox>
        <DetailsBox>
          <DetailsText right>Wednesday 06.01.2021</DetailsText>
          <DetailsText right>Light Rain</DetailsText>
        </DetailsBox>
      </DetailsContainer>
    </Container>
  );
};

export default WeatherDetails;
