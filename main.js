
const path = 'coord.csv';
  
// Fetch the CSV file
fetch(path)
  .then(response => response.text())
  .then(data => {
    // Split the file content by line
    const lines = data.trim().split('\n');



    // Process each line to extract coordinates
    const coordinatesArray = lines.map(line => {
      const [lat, lon] = line.split(',').map(coord => parseFloat(coord.trim()));
      return [lat, lon];  // Return as an array
    });

    // Initialize the map
    let map = L.map('map').setView([39.630, -77.556], 5);

    // Load and display tile layer on the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map at the first location

    //Add the markers and popups here:
    let m1 = L.marker([45.904, -68.925]).addTo(map);
    m1.bindPopup("Starting from Mt. Katahdin!").openPopup();
    let m2 = L.marker([45.352, -69.499]).addTo(map);
    //m2.bindPopup("8/2/24 Just finished the 100 mile wilderness! After being wet for a week straight I am taking a 0 at Shaws");
    //let m3 = L.marker([45.237, -70.001)].addTo(map);
    //m3.bindPopup("After completing Moxie Bald Mountain I took the ferry over the Kennebec river!").openPopup();


    

    // Add polylines to the map
    for (let i = 1; i < coordinatesArray.length; i++) {
      L.polyline([coordinatesArray[i-1], coordinatesArray[i]]).addTo(map);
    }
  })
  .catch(error => console.error('Error fetching the file:', error));
