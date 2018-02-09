import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'map-home',
    templateUrl: '../templates/maps.component.html',
    styleUrls: ['../../app.component.css']
})
export class MapsHomeComponent implements OnInit {
    mapbox = mapboxgl;
    map: mapboxgl.Map;

    constructor() {
        this.mapbox.accessToken = environment.mapbox.accessToken;
    }

    ngOnInit() {
        this.initMap();

    }

    initMap() {
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v10',
            zoom: 3,
            center: [78.9629, 20.5937]
        });
        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.on('load', (event) => {
            this.map.addSource('geojson-marker', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-77.0323, 38.9131]
                    },
                    'properties': {
                        'title': 'Mapbox DC',
                        'marker-symbol': 'monument'
                    }
                }
            });
        });
    }

}
