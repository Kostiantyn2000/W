import React from "react";
import "./App.scss";
import HomePage from "./views/home/homePage";

class App extends React.Component {
  state = {
    cityName: "",
  };

  searchCity = (city) => {
    this.setState(({ cityName }) => {
      return {
        cityName: city,
      };
    });
  };
  render() {
    return (
      <HomePage searchCity={this.searchCity} cityName={this.state.cityName} />
    );
  }
}

export default App;
