import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const WheaterExtraInfo = props => {
  const { humidity, wind } = props;
  return (
    <div className="weatherExtraInfoCont">
      <span className="extraInfoText">{`Humedad: ${humidity}%`}</span>
      <span className="extraInfoText">{`Viento: ${wind}`}</span>
    </div>
  );
};

WheaterExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

export default WheaterExtraInfo;
