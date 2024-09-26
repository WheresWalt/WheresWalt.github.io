
const path = 'coord.csv';
const blog = 'blog.csv';

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

    //Add the markers and popups here:
    let m1 = L.marker([45.904, -68.925]).addTo(map);
    m1.bindPopup("7/26/24 Starting from Mt. Katahdin!").openPopup();
    let m2 = L.marker([45.352, -69.499]).addTo(map);
    m2.bindPopup("8/2/24 Just finished the 100 mile wilderness! After being wet for a week straight I am taking a 0 at Shaws").openPopup();
    let m3 = L.marker([45.237, -70.001]).addTo(map);
    m3.bindPopup("8/6/24 After completing Moxie Bald Mountain I took the ferry over the Kennebec river!").openPopup();
    let m4 = L.marker([44.970, -70.446]).addTo(map);
    m4.bindPopup("8/16/24 Today we climbed the saddleback mountains. Overall it was a very enjoyable climb with a few rock scrambles, along with beautiful weather!").openPopup();
    let m5 = L.marker([44.598, -70.912]).addTo(map);
    m5.bindPopup("8/19/24 Today I hiked up to the summit of Baldpate Mountain. There was little to no visibility and the conditions were windy and cold. Nonetheless it was an amazing time!").openPopup();
    let m6 = L.marker([44.565, -70.974]).addTo(map);
    m6.bindPopup("8/22/24 Today we had to stop early after only hiking 4 miles due to inclement weather. Tomorrow we will move on to Mahoosuc Notch!").openPopup();
    let m7= L.marker([44.560,-70.977]).addTo(map);
    m7.bindPopup("8/23/24 We completed the Mahoosuc Notch in 1 hr and 59 minutes and 44 seconds!").openPopup();
    let m8 = L.marker([44.485, -71.022]).addTo(map);
    m8.bindPopup("8/24/24 Made it out of Maine! Overall the state was beautiful but I’m eager to keep moving on to the white mountains!").openPopup();
    let m9 = L.marker([44.329, -71.150]).addTo(map);
    m9.bindPopup("8/26/24 Today we completed the Wildcat Mountains, which is the first mountain range in the White Mountains! I had beautiful weather and a smooth ride to start the most technical part of my journey.").openPopup();
    let m10 = L.marker([44.328, -71.283]).addTo(map);
    m10.bindPopup("8/28/24 Finished Mt. Madison today! After enjoying a coffee and a bowl of soup at the Madison Spring Hut, I am going to stealth camp and hit the rest of the range tomorrow!").openPopup();
    let m11 = L.marker([44.177, -71.427]).addTo(map);
    m11.bindPopup("8/29/24 Today I finished the Presidential Range of the White Mountains and enjoyed beautiful weather the whole day!");
    let m12 = L.marker([44.139, -71.703]).addTo(map);
    m12.bindPopup("8/30/24 I continued my way through the White Mountains and after pushing through day hikers all day long, I finally completed Franconia Range leaving just 2 ranges left for the Whites!").openPopup();
    let m13 = L.marker([44.033, -71.881]).addTo(map);
    m13.bindPopup("8/31/24 Today I slacked packed through the Kingsman Range of the White mountains with beautiful weather and even better views").openPopup();
    let m14 = L.marker([43.997, -71.889]).addTo(map);
    m14.bindPopup("9/1/24 Today I finished the White Mountains by climbing Mt. Moosilauke!").openPopup();
    let m15 = L.marker([43.222, -72.950]).addTo(map);
    m15.bindPopup("9/15/24 Today I left Little Rock Pond and made it to the Bromley shelter, after climbing Mt. Bromley!").openPopup();
    let m16 = L.marker([42.616, -73.190]).addTo(map);
    m16.bindPopup("9/21/24 After seeing the beautiful view from Mt. Greylock I hiked into the town of Dalton where I spent the evening camping at Levardi’s and am taking a bus to do a quick visit home!").openPopup();
    




    

    // Add polylines to the map
    for (let i = 1; i < coordinatesArray.length; i++) {
      L.polyline([coordinatesArray[i-1], coordinatesArray[i]]).addTo(map);
    }
  })
  .catch(error => console.error('Error fetching the file:', error));

fetch(blog)
  .then(response => response.text())
  .then(data => {
    const blogs = data.trim().split('\n');
    const blogList = document.getElementById('blog-list');
   

    blogs.forEach(b => {
      const listItem = document.createElement('li');
      listItem.textContent = b;
      blogList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching the file:', error));

  try {
      const image = document.getElementById('image');
      const blogImage = document.createElement('img');
      blogImage.src = `photos/${index + 1}.jpg`; // Assuming the images are named 1.jpg, 2.jpg, etc.
      blogImage.alt = `Image for blog ${index + 1}`;
      blogImage.style.width = '150px'; // Adjust the width as needed
      blogImage.style.height = 'auto';
      image.appendChild(blogImage);

  }
  catch (error) {
    console.error('Error fetching the file:', error);
  }


  fetch(blog)
  .then(response => response.text())
  .then(data => {
    const blogs = data.trim().split('\n');
    const recent = document.getElementById('recent');  
    const recentPost = document.createElement('li');
    recentPost.textContent = blogs[blogs.length - 1];
    
    recent.appendChild(recentPost);
    
  })
  .catch(error => console.error('Error fetching the file:', error));