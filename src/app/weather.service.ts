import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import WeatherForecast from './weather-forecast';
import WeatherData from './weather-data';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getForecastByCoordinates(lon: number, lat: number): Observable<WeatherForecast> {
    return this.http.get(`${environment.API_URL}/onecall?exclude=hourly,minutely,current&lat=${lat}&lon=${lon}&units=metric&appid=${environment.API_KEY}`)
      .pipe(
        map((weatherData: WeatherData) => new WeatherForecast(weatherData)),
        catchError(this.handleError),
      );
  }

  private handleError(data): Observable<WeatherForecast> {
    console.log(data);
    return of(data);
  }
}
