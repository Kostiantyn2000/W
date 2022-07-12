import React from "react";
import "./locationInfo.scss";
import { dateDay, dateAll } from "../../../utils/dateAll";

export default class WeatherCityInfoDate extends React.Component {
  render() {
    const { name } = this.props.weatherCondition;
    return (
      <ul className="location-list">
        <li className="location-list__item">{dateDay()}</li>
        <li className="location-list__item">{dateAll()}</li>
        <li className="location-list__item mg-top">{name}</li>
      </ul>
    );
  }
}
