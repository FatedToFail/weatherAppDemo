import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss'],
})
export class ForecastItemComponent {
  @Input() icon: string;
  @Input() day: Date;
  @Input() temprature: number;
  @Input() weatherType: string;
}
