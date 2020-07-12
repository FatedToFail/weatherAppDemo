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
  @Output() mapReposition: EventEmitter<{ left: number, top: number }> = new EventEmitter();
  public map: Map;
  private viableClick = false;
  public coordinate: number[] = null;

  ngOnInit(): void {
    this.setupMap();
  }

  private setupMap(): void {
    this.initMap();
    this.centerMap();
    this.setupEventListeners();
  }

  private initMap(): void {
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
  }

  private centerMap(): void {
    const necessaryExtentToContainHungary = [15.9, 46.2, 23.1, 49.4];
    const resolution = this.map.getView().getResolutionForExtent(necessaryExtentToContainHungary);
    const zoom = this.map.getView().getZoomForResolution(resolution);
    this.map.getView().setZoom(zoom);
  }

  private setupEventListeners() {
    this.map.on('moveend', this.setPopupPosition);
    this.map.on('pointermove', this.setPopupPosition);
  }

  public getCoordinates(event: MouseEvent): void {
    if (this.viableClick) {
      if (this.modalIsVisible) {
        this.coordinate = null;
        this.clickEvent.emit(null);
      } else {
        this.coordinate = this.map.getCoordinateFromPixel([event.clientX, event.clientY]);
        this.weatherService.getForecastByCoordinates(this.coordinate).subscribe(data => {
          this.clickEvent.emit(data.forecast);
          this.mapReposition.emit({ left: event.clientX, top: event.clientY })
        });
      }
    }
  }

  public stopEvent(): void {
    this.viableClick = true;
    setTimeout(() => this.viableClick = false, 200);
  }

  private setPopupPosition = (): void => {
    if (this.coordinate) {
      const pixel = this.map.getPixelFromCoordinate(this.coordinate);
      this.mapReposition.emit({ left: pixel[0], top: pixel[1] });
    }
  }
}
