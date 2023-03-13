import "./css/style.css";

var map = L.map('map').setView([1.9577, 37.2972], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 6,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var wmsLayer = L.Geoserver.wms("http://localhost:8080/geoserver/wms", {
    layers: "demo:inunriver_rcp8p5_MIROC-ESM-CHEM_2080_rp01000",
});

wmsLayer.addTo(map);

console.log("hello world");