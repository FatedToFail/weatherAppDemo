import { Component } from '@angular/core';
import ForecastData from './forecastData';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public forecasts: ForecastData[] = [];
  public current: ForecastData = { day: null, temprature: null, weatherType: null, icon: null };
  public city: string;
  public modalIsVisible = false;
  public position = { left: 0, top: 0 };

  public handleClick(data: { forecast: ForecastData[], current: ForecastData, geo: string }): void {
    if (data) {
      this.forecasts = data.forecast;
      this.current = data.current;
      this.city = data.geo;
      this.modalIsVisible = true;
    } else {
      this.modalIsVisible = false;
      setTimeout(this.handleCleanUp, 200);
    }
  }

  private handleCleanUp = () => {
    this.forecasts = [];
    this.city = '';
    this.current = { day: null, temprature: null, weatherType: null, icon: null };
  }

  public handlePopupPosition(position: { left: number, top: number }): void {
    this.position = { left: position.left - 86.5, top: position.top - 106.5 };
  }
}
