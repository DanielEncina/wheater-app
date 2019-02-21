import React, { Component } from "react";
import PropTypes from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData";
import * as constWeather from "../../constants";
import "./styles.css";

const weatherData = {
  temperature: 11,
  weaterState: constWeather.RAIN,
  humidity: 102,
  wind: "10 km/s"
};

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = this.props;
    this.state = { city, weatherData };
  }

  handleUpdateClick = () => {
    console.log("Actualizando...");

    this.setState({
      city: "Peñaflor",
      weatherData: {
        temperature: 32,
        weaterState: constWeather.SUN,
        humidity: 30,
        wind: "5 m/s"
      }
    });
  };

  render() {
    const { city, weatherData } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={weatherData} />
        <button onClick={() => this.handleUpdateClick()}> Actualizar </button>
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired
};

export default WeatherLocation;
