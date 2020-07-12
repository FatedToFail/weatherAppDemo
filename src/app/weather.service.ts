import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import WeatherForecast from './weather-forecast';
import WeatherData from './weather-data';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getForecastByCoordinates([lon, lat]: number[]): Observable<WeatherForecast> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely,current&lat=${lat}&lon=${lon}&units=metric&lang=hu&appid=69fc5903875165ce620a666a99b42349`)
      .pipe(
        map((weatherData: WeatherData) => new WeatherForecast(weatherData)),
        catchError(this.handleError)
      );
  }

  private handleError(data): Observable<WeatherForecast> {
    console.log(data);
    return of(data);
  }
}
