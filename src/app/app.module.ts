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
import { GeoDataService } from './geo-data.service';
import { WeatherService } from './weather.service';

// Pipes
import { TempraturePipe } from './temprature.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ForecastItemComponent,
    ForecastModalComponent,
    MapComponent,
    PopupComponent,
    TempraturePipe,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    GeoDataService,
    WeatherService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
