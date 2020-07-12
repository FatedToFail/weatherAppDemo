import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() icon: string;
  @Input() day: Date;
  @Input() temprature: number;
  @Input() weatherType: string;
  @Input() positionLeft: string;
  @Input() positionTop: string;

  constructor() { }

  ngOnInit(): void {
  }

  public days = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];
}
