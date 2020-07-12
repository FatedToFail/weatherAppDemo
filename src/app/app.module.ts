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
import { PopupComponent } from './popup/popup.component';

// Services
import { WeatherService } from './weather.service';
import { GeoDataService } from './geo-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ForecastItemComponent,
    ForecastModalComponent,
    MapComponent,
    PopupComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    WeatherService,
    GeoDataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
