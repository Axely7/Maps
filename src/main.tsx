import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYXhlbHk3IiwiYSI6ImNsOW9hcG14cTBlZmszb2w4aTEyY25zMHMifQ.27Y7c546x0Jd3smqm03uvg';



if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolocation");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
