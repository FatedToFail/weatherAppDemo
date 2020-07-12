import { Component, Input } from '@angular/core';
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
  ],
  templateUrl: './forecast-modal.component.html',
  styleUrls: ['./forecast-modal.component.scss']
})
export class ForecastModalComponent {
  @Input() isVisilbe: boolean;
  @Input() forecasts: ForecastData[];
  @Input() city: string;
}
