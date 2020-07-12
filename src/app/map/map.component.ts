import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { useGeographic } from 'ol/proj';
import { Map, View } from 'ol/index';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import { defaults, DragRotateAndZoom } from 'ol/interaction';
import { WeatherService } from '../weather.service';
import 'ol/ol.css';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }

  @Input() modalIsVisible = false;
  @Output() clickEvent: EventEmitter<any[] | null> = new EventEmitter();
  map: Map;
  viableClick = false;

  ngOnInit(): void {
    this.setupMap();
  }

  setupMap(): void {
    const centerOfHungary = [19.5, 47.2];
    
    useGeographic();
    
    this.map = new Map({
      target: 'map',
      view: new View({
        center: centerOfHungary,
        zoom: 7.5
      }),
      layers: [
        new TileLayer({
          source: new OSM()
        }),
      ],
      interactions: defaults().extend([
        new DragRotateAndZoom()
      ]),
    });

    const necessaryExtentToContainHungary = [15.9, 46.2, 23.1, 49.4];
    const resolution = this.map.getView().getResolutionForExtent(necessaryExtentToContainHungary);
    const zoom = this.map.getView().getZoomForResolution(resolution);

    this.map.getView().setZoom(zoom);
    console.log(zoom, this.map.getView().getZoom());
  }

  public getCoordinates(event: MouseEvent): void {
    if (this.viableClick) {
      if (this.modalIsVisible) {
        this.clickEvent.emit(null);
      } else {
        const coordinates = this.map.getCoordinateFromPixel([event.clientX, event.clientY]);
        this.weatherService.getForecastByCoordinates(coordinates).subscribe(data => {
          this.clickEvent.emit(data.forecast);
        });
      }
    }
  }

  public stopEvent(): void {
    this.viableClick = true;
    setTimeout(() => this.viableClick = false, 200);
  }
}
