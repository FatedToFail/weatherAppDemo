import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public forecasts = [];
  public modalIsVisible = false;

  handleClick(forecasts: any[] | null): void {
    if (forecasts) {
      this.forecasts = forecasts;
      this.modalIsVisible = true;
    } else {
      this.modalIsVisible = false;
      setTimeout(() => this.forecasts = [], 200);
    }
  }
}
