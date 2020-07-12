import { Injectable } from '@angular/core';
import { flatMap, map } from 'rxjs/operators';
import { GeoDataService } from './geo-data.service';
import { WeatherService } from './weather.service';
import WeatherForecast from './weather-forecast';
import { Observable } from 'rxjs';
import ForecastData from './forecastData';


@Injectable({
  providedIn: 'root'
})
export class GeoAndForecastService {

  constructor(
    private geoDataService: GeoDataService,   
    private weatherService: WeatherService,
  ) { }

  public getCityAndForecastByCoordinate([lon, lat]: number[]): Observable<{ current: ForecastData, forecast: ForecastData[], geo: string}> {
    return this.weatherService.getForecastByCoordinates(lon, lat)
      .pipe(
        flatMap((data: WeatherForecast) => {
          return this.geoDataService.getGeoDataByCoordinate(lon, lat).pipe(
            map(geoData => ({
              current: data.forecast[0],
              forecast: data.forecast.slice(1),
              geo: geoData,
            })),
          );
        })
      )
  }
}
