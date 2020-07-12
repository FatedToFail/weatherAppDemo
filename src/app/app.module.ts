// @angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { ForecastModalComponent } from './forecast-modal/forecast-modal.component';
import { MapComponent } from './map/map.component';

// Services
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    ForecastItemComponent,
    ForecastModalComponent,
    MapComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule { }
