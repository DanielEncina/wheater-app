import React from "react";
import "./styles.css";

const Location = props => {
  const { city } = props;
  return (
    <div className="locationCont">
      <h1>{city}</h1>
    </div>
  );
};

export default Location;
