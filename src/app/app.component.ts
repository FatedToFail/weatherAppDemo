import { Component } from '@angular/core';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public forecasts = [];
  public modalIsVisible = false;
  public position = { left: 0, top: 0 };

  handleClick(forecasts: any[] | null): void {
    if (forecasts) {
      this.forecasts = forecasts;
      this.modalIsVisible = true;
    } else {
      this.modalIsVisible = false;
      setTimeout(() => this.forecasts = [], 200);
    }
  }

  handlePopupPosition(position: { left: number, top: number }): void {
    this.position = { left: position.left - 106.5, top: position.top - 106.5 };
  }
}
