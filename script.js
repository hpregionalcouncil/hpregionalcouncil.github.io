// Step 1: Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

// Step 2: Define image bounds
const bounds = [[0,0], [1000,1000]]; // Example dimensions. Use your image's pixel size.
const image = L.imageOverlay('my-map-image.jpg', bounds).addTo(map);
// Step 3: Set initial view to fit the image
map.fitBounds(bounds);
