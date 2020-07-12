import { Component, OnInit } from '@angular/core';
import { useGeographic } from 'ol/proj';
import { Map, View } from 'ol/index';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import { defaults, DragRotateAndZoom } from 'ol/interaction';
import 'ol/ol.css';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public map: Map;

  ngOnInit(): void {
    this.setupMap();
  }

  setupMap(): void {
    const centerOfHungary = [19.5, 47];
    
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

    const necessaryExtent = [15.9, 45.7, 23.1, 48.6];
    const resolution = this.map.getView().getResolutionForExtent(necessaryExtent);
    const zoom = this.map.getView().getZoomForResolution(resolution);

    this.map.getView().setZoom(zoom);
  }
}
