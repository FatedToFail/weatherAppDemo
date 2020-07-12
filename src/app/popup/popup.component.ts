import { Component, Input } from '@angular/core';
import {
  animate, state, style,
  trigger, transition,
} from '@angular/animations';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'scaleX(1)',
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        transform: 'scaleX(.5)',
      })),
      transition('open => closed', [
        animate('.13s ease-out')
      ]),
      transition('closed => open', [
        animate('.21s ease-in')
      ]),
    ]),
  ],
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input() icon: string;
  @Input() city: string;
  @Input() temprature: number;
  @Input() weatherType: string;
  @Input() positionLeft: string;
  @Input() positionTop: string;
  @Input() isVisilbe: boolean;
}
