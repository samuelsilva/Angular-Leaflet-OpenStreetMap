import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';
//import { LatLng, Leaflet } from 'leaflet';
import "leaflet-control-geocoder";

// image path
//Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-pointed-map',
  templateUrl: './pointed-map.component.html',
  styleUrls: ['./pointed-map.component.css']
})
export class PointedMapComponent  {
 
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  
  options = {
    // map configs
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: { lat: -30.04718, lng: -51.21568 }
    // PROCEMPA -30.04718,-51.21568

  }

  // ======== component methods ==========

  initMarkers() {
    // markers init
    const initialMarkers = [
      { // Policia Federal -30.04837,-51.21517
        position: { lat: -30.04837, lng: -51.21517 },
        draggable: true
      },
      { // Darma Pub -30.04423,-51.21618
        position: { lat: -30.04423, lng: -51.21618 },
        draggable: true
      },
      { // Shopping João Pessoa -30.04596,-51.21369
        position: { lat: -30.04596, lng: -51.21369 },
        draggable: true
      }
    ];
    for(let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data,index);
      // addTo() => add a marker on map
      // bindPopup() => links a popup to the marker that will display the coordinates of the marker.
      marker.addTo(this.map).bindPopup(`<b>${data.position.lat}, ${data.position.lng}</b>`);
      // panTo() => centers the map on the starting position of the marker using the method
      this.map.panTo(data.position);
      this.markers.push(marker);
    }       
  }

  generateMarker(data: any, index: number) {
    // generate marker
    return Leaflet.marker(data.position, { draggable: data.draggable })
    .on('click', (event) => this.markerClicked(event, index))
    .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }
  
  // Original code
  /*
  mapClicked($event: any) {
    const latlngExp = new Leaflet.LatLng($event.latlng.lat, $event.latlng.lng);
    Leaflet.popup().setLatLng(latlngExp)
    .setContent('<p>Hello world!<br />This is a nice popup.</p>'+this.getAddress($event.latlng.lat, $event.latlng.lng))
    .openOn(this.map);
    console.log($event.latlng.lat, $event.latlng.lng);
  }*/
  async mapClicked($event: any) {
    const latlngExp = new Leaflet.LatLng($event.latlng.lat, $event.latlng.lng);
    const address = await this.getAddress($event.latlng.lat, $event.latlng.lng);
    Leaflet.popup()
      .setLatLng(latlngExp)
      .setContent(`<p>Hello world!<br />This is a nice popup.</p>${address}`)
      .openOn(this.map);
    console.log($event.latlng.lat, $event.latlng.lng);
  }
  
  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }
  
  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }

  // Original code
  /*
  getAddress(lat: number, lng: number) {
    const geocoder = (Leaflet.Control as any).Geocoder.nominatim();
    return new Promise((resolve, reject) => {
        geocoder.reverse(
            { lat, lng },
            this.map.getZoom(),
            (results: any) => results.length ? resolve(results[0].name) : reject(null)
        );
    })
  }*/
  async getAddress(lat: number, lng: number) {
    const geocoder = (Leaflet.Control as any).Geocoder.nominatim();
    try {
      const results = await new Promise<any[]>((resolve, reject) => {
        geocoder.reverse(
          { lat, lng },
          this.map.getZoom(),
          (results: any) => resolve(results),
          (error: any) => reject(error)
        );
      });
      if (results.length) {
        return results[0].name;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving address:', error);
      return null;
    }
  }

}
