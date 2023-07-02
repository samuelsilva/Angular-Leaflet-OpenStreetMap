# Maps in Angular with Angular Material, OpenStreetMap and Leaflet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

This code is based in code for [Ultimateakask](https://github.com/ultimateakash/angular-leaflet-maps/)

The challenge of this project is actually to look for the geographic points of an existing system and map these points to help the population of my city. The base code I got (link mentioned above) helped a lot, I was having a lot of problems with the leaflet until I found it.<br>
Then I managed to increment some things, such as the use of "async/await" to fetch the data of the clicked places.

## **1. ARCHITECTURE**
### **1.1. Technologies used**
- <img align="center" alt="Angular" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" /> Angular (Frontend)
- <img align="center" alt="Material" height="30" width="40" src="https://material.angular.io/assets/img/angular-material-logo.svg" /> Angular Material (Frontend)
- <img align="center" alt="OpenStreetMap" height="30" width="40" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg" /> Open Street Map (Frontend)
- <img align="center" alt="Leaflet" height="30" width="40" src="https://github.com/Leaflet/Leaflet/blob/main/src/images/logo.svg" /> Leaflet (Frontend)
<br />


### **1.2. Important Links**
- [Angular Material](https://material.angular.io/)
- [Open Street Map](https://openstreetmap.org/)
- [Leaflet](https://leafletjs.com/)

## BASIC INSTALLATIONS
TODO LIST
[] Write the step by step of the project installations:
[] -> Angular Material
[] -> Angular Material/Navigation
[] -> Leaflet/
[] Create an API NodeJS that import the points from an existent System
[] Create the service to link the API with this system

  npm install @angular/material <br>
  npm install @angular/material@15.2.9<br>
  ng generate @angular/material:navigation nav<br>
  
  npm install leaflet @types/leaflet<br>
  npm install @asymmetrik/ngx-leaflet<br>
  npm install @asymmetrik/ngx-leaflet@15.0.1<br>
  npm install leaflet-control-geocoder

