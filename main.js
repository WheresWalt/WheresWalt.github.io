



let map = L.map('map').setView([39.630, -77.556], 5);

// Load and display tile layer on the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const fs = require('fs');
const path = 'coord.csv';

// Read the CSV file
fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Split the file content by line
    const lines = data.trim().split('\n');

    // Process each line to extract coordinates
    const coordinatesArray = lines.map(line => {
      const [lat, lon] = line.split(',').map(coord => parseFloat(coord.trim()));
      return [lat, lon];  // Return as an array
    });

    

    // Add a marker to the map at a given location
    //y, x
    let marker = L.marker([45.904, -68.922]).addTo(map);
    for (let i = 1; i < coordinatesArray.length; i++) {
        //parameter needs to be an array for some fucking reason
        L.polyline([coordinatesArray[i-1], coordinatesArray[i]]).addTo(map);
    }

});





/*
    // Add popups to the marker, circle, and polygon
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

    // Add a standalone popup to the map
    var popup = L.popup()
        .setLatLng([51.5, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(map);*/