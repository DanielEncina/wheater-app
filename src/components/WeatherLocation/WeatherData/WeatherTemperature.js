import React from "react";
import PropTypes from "prop-types";
import WeatherIcons from "react-weathericons";
import * as constWheater from "../../../constants";
import "./styles.css";

const iconsDay = {
  [constWheater.SUN]: "day-sunny",
  [constWheater.FOG]: "day-fog",
  [constWheater.RAIN]: "day-rain",
  [constWheater.CLOUDY]: "day-cloudy"
};

const getWeatherIcon = nameIcon => {
  const icon = iconsDay[nameIcon];
  const sixeIcon = "4x";
  return (
    <WeatherIcons
      className="wIcon"
      name={icon ? icon : "thermometer"}
      size={sixeIcon}
    />
  );
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{` ${temperature} `}</span>
    <span className="temperatureType">Cº</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
