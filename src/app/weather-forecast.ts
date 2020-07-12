import WeatherData from './weather-data';
import Forecast from './forecast';
import ForecastData from './forecastData';


export default class WeatherForecast {
  public forecast: ForecastData[];

  constructor(weatherData?: WeatherData) {
    this.forecast = weatherData?.daily.map((forecast: Forecast) => ({
      day: new Date(+`${forecast.dt}000`),
      temprature: forecast.temp.day,
      weatherType: forecast.weather[0].description.split('').map((e, i) => i === 0 ? e.toUpperCase() : e).join(''),
      icon: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
    })) || null;
  }
}
