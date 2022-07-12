import React from "react";
import ConditionDisplay from "./temperatureInfo/temperatureInfo";
import "./temperatureSection.scss";

export default class WeatherConditionPanel extends React.Component {
  render() {
    console.log(this.props.weatherCondition);
    return (
      <div className="section-temperature">
        <img
          className="section-img"
          src={"https://img.icons8.com/stickers/100/000000/cloud.png"}
          alt="Snow"
        />
        <ConditionDisplay weatherCondition={this.props.weatherCondition} />
      </div>
    );
  }
}
