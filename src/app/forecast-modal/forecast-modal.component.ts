import { Component, Input, OnChanges } from '@angular/core';
import {
  animate, state, style,
  trigger, transition,
} from '@angular/animations';
import ForecastData from '../forecastData';


@Component({
  selector: 'forecast-modal',
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('closed', style({
        transform: 'translateX(-220px)'
      })),
      transition('open => closed', [
        animate('.13s ease-out')
      ]),
      transition('closed => open', [
        animate('.21s ease-in')
      ]),
    ]),
    trigger('openCloseMobile', [
      state('open', style({
        transform: 'translateY(calc(100vh - 75px))'
      })),
      state('openActive', style({
        transform: 'translateY(0)'
      })),
      state('closed', style({
        transform: 'translateY(100vh)'
      })),
      transition('open => closed', [
        animate('.13s ease-out')
      ]),
      transition('open => openActive', [
        animate('.21s ease-in')
      ]),
      transition('openActive => open', [
        animate('.13s ease-out')
      ]),
      transition('openActive => close', [
        animate('.17s ease-out')
      ]),
      transition('closed => open', [
        animate('.21s ease-in')
      ]),
    ]),
  ],
  templateUrl: './forecast-modal.component.html',
  styleUrls: ['./forecast-modal.component.scss']
})
export class ForecastModalComponent implements OnChanges {
  @Input() isVisilbe: boolean;
  @Input() forecasts: ForecastData[];
  @Input() city: string;
  isActive: boolean;

  public setIsActive(): void {
    this.isActive = !this.isActive;
  }

  public getState(): string {
    if (!this.isVisilbe) return 'closed';
    if (this.isVisilbe && !this.isActive) return 'open';
    return 'openActive';
  }

  public ngOnChanges(data): void {
    console.log(data);
  }
}
