import { QueryCombiner } from "../utils/network_helpers";

export class WeatherRepository {
  api = {
    baseUrl: "https://api.openweathermap.org/data/2.5",
    path: "/weather",
    queries: {
      appid: "e43161d7bdda56909670c7e7d5629a4f",
      units: "metric",
    },
  };

  getCityNameWeather = async (cityName) => {
    const queries = QueryCombiner.composeQueries(
      Object.entries({ ...this.api.queries, q: cityName })
    );
    let response = await fetch(`${this.api.baseUrl}${this.api.path}${queries}`);
    return await response.json();
  };

  //   getLocationWeather = async (lat, lot) => {
  //     const queries = QueryCombiner.composeQueries([
  //       { lat: lat, long: lot },
  //       Object.keys(this.api.queries),
  //     ]);
  //   };
}
