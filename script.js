// Step 1: Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

// Step 2: Define image bounds
const bounds = [[0,0], [1080,1920]]; // Note: bounds are [Y,X] or [height, width]
const image = L.imageOverlay('map002.jpg', bounds).addTo(map);

// Corrected marker declarations with unique variable names
const point1 = L.marker([941,289]).addTo(map);
point1.bindPopup("Diggings");

const point2 = L.marker([1100, 100]).addTo(map);
point2.bindPopup("Yondanarra");

const point3 = L.marker([800, 600]).addTo(map);
point3.bindPopup("Ginninendi");

const point4 = L.marker([800, 125]).addTo(map);
point4.bindPopup("Lowe");

const point5 = L.marker([1110, 500]).addTo(map);
point5.bindPopup("Blewy Hill");

// Step 3: Set initial view to fit the image
map.fitBounds(bounds);
