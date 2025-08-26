// Step 1: Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

// Step 2: Define image bounds
const bounds = [[0,0], [1080,1920]]; // Swapped to [height, width]
const image = L.imageOverlay('map002.jpg', bounds).addTo(map);

// Corrected marker declarations with flipped coordinates and unique variable names
const point1 = L.marker([289, 941]).addTo(map);
point1.bindPopup("Diggings");

const point2 = L.marker([100, 1100]).addTo(map);
point2.bindPopup("Yondanarra");

const point3 = L.marker([600, 800]).addTo(map);
point3.bindPopup("Ginninendi");

const point4 = L.marker([125, 800]).addTo(map);
point4.bindPopup("Lowe");

const point5 = L.marker([500, 1110]).addTo(map);
point5.bindPopup("Blewy Hill");

// Step 3: Set initial view to fit the image
map.fitBounds(bounds);
