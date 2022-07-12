import React from "react";
import Navbar from "../../components/layout/navBar/navBar";
import { WeatherRepository } from "../../repositories/weather_repository";
import WeatherCityInfoDate from "./locationInfo/locationInfo";
import WeatherConditionPanel from "./temperature/temperatureSection";
class HomePage extends React.Component {
  _weatherRepository = new WeatherRepository();
  state = {
    weatherCondition: {},
    isLoading: false,
    hasError: false,
    lastUpdateTime: new Date(),
    cityName: "Kiev",
  };

  componentDidMount = () => {
    this.weatherConditionApi();
  };

  weatherConditionApi = (city = "Kiev") => {
    this._weatherRepository
      .getCityNameWeather(city)
      .then((data) => {
        this.setState({
          weatherCondition: data,
          isLoading: true,
          lastUpdateTime: new Date(),
        });
      })
      .catch((err) => {
        this.setState({
          hasError: true,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const { weatherCondition, cityName } = this.state;
    console.log(weatherCondition);
    console.log(cityName);
    return (
      <div className="content-container">
        <Navbar
          searchCity={this.props.searchCity}
          weatherConditionApi={this.weatherConditionApi}
        />
        <WeatherConditionPanel weatherCondition={weatherCondition} />
        <WeatherCityInfoDate weatherCondition={weatherCondition} />
      </div>
    );
  }
}

export default HomePage;
