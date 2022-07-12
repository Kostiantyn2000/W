import React from "react";
import "./temperatureInfo.scss";

export default class ConditionDisplay extends React.Component {
  render() {
    const { main, weather } = this.props.weatherCondition;
    const temperature = main?.temp === undefined ? "" : Math.round(main?.temp);
    const description =
      weather?.[0]?.main === undefined ? "Undefined" : weather?.[0]?.main;
    const feelsLikeTemperature =
      main?.feels_like === undefined ? "" : Math.round(main?.feels_like);

    return (
      <div className="temperature-info">
        <span className="info-temperature">{temperature}</span>
        <h3 className="weather-today">{description}</h3>
        <span className="weather-will">Feels like {feelsLikeTemperature}</span>
      </div>
    );
  }
}
