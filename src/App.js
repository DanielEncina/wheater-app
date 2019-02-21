import React, { Component } from "react";
import "./App.css";
import WeatherLocation from "./components/WeatherLocation";

class App extends Component {
  render() {
    return (
      <div>
        <WeatherLocation city={"Santiago de Chile, Maipú"} />
      </div>
    );
  }
}

export default App;
