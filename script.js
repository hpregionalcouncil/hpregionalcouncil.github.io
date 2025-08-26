// Step 1: Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

// Step 2: Define image bounds
const bounds = [[0,0], [1000,1000]]; // Example dimensions. Use your image's pixel size.
const image = L.imageOverlay('map002.jpg', bounds).addTo(map);

const point1 = L.marker([941,289]).addTo(map);
point1.bindPopup("Diggings");

const point1 = L.marker([1100, 100]).addTo(map);
point1.bindPopup("Yondanarra");

const point1 = L.marker([800, 600]).addTo(map);
point1.bindPopup("Ginninendi");

const point1 = L.marker([800, 125]).addTo(map);
point1.bindPopup("Lowe");

const point1 = L.marker([1110, 500]).addTo(map);
point1.bindPopup("Blewy Hill");
// Step 3: Set initial view to fit the image
map.fitBounds(bounds);
