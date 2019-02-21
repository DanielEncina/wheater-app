import React from "react";
import PropTypes from "prop-types";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

const WheaterData = ({
  data: { temperature, weaterState, humidity, wind }
}) => (
  <div className="weatherDataCont">
    <WeatherTemperature temperature={temperature} weatherState={weaterState} />
    <WeatherExtraInfo humidity={humidity} wind={wind} />
  </div>
);

WheaterData.prototypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weaterState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default WheaterData;
