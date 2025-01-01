
const path = 'coord.csv';
const blog = 'blog.csv';
const photoNum = 3;

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
    let m17 = L.marker([42.289, -73.181]).addTo(map);
    m17.bindPopup("9/24/24 Today I started out alone and began the journey to catch up to my tramily. I spent the night at Full Goose Pond cabin, where I slept in a bunk and ate a pancake breakfast!").openPopup();
    let m18 = L.marker([41.939262, -73.358894]).addTo(map);
    m18.bindPopup("9/27/24 I reached the 700 mile marker where I stopped at the Mountain Side Cafe for a coffee and a burger.").openPopup();
    let m19 = L.marker([41.675087, -72.507057]).addTo(map);
    m19.bindPopup("9/29/24 Stopped for a quick resupply at Bulls Bridge Market.").openPopup();
    let m20 = L.marker([41.474490, -73.822070]).addTo(map);
    m20.bindPopup("10/1/24 I spent the night at Canopus Lake Beach Shelter. Unfortunately everything was closed this late in the season.").openPopup();
    let m21 = L.marker([41.313061, -73.990356]).addTo(map);
    m21.bindPopup("10/3/24 Today I crossed the Hudson River and climbed Bear Mountain where I saw the trailside zoo and spent the night at West Mountain Shelter over looking NYC!").openPopup();
    let m22 = L.marker([41.222599, -74.294296]).addTo(map);
    m22.bindPopup("10/6/24 Resupplied in Green Wood Lake where I got a sub from the Country Grocery.").openPopup();
    let m23 = L.marker([41.315804, -74.657234]).addTo(map);
    m23.bindPopup("10/8/24 I stayed at the Highpoint Shelter where I met a section hiker named Gobbler and spent the evening trying to stay warm in the shelter.").openPopup();
    let m24 = L.marker([41.060760, -74.959122]).addTo(map);
    m24.bindPopup("10/11/24 Crossed the Beaver Pond outlet where I saw lots of wild life and took in the view of the water.").openPopup();
    let m25 = L.marker([40.978661, -75.136238]).addTo(map);
    m25.bindPopup("10/15/24 Today I crossed the Delaware River into PA and met up with another thru hiker named Bones.").openPopup();
    let m26 = L.marker([40.826, -75.690]).addTo(map);
    m26.bindPopup("10/18/24 We stayed at the Breezy Acres Hostel with Mary Poppins who treated us very well, helped us resupply, and dropped us off at the trail head! I highly recommend stopping by.").openPopup();
    let m27 = L.marker([40.707713, -75.804818]).addTo(map);
    m27.bindPopup("10/20/24 I arrived at the Lookout Hostel, where I finally caught up to Sherpa and the tramily for a wonderful reunion.").openPopup();
    let m28 = L.marker([40.574497, -76.020073]).addTo(map);
    m28.bindPopup("10/22/24 I passed through Port Clinton as we make our way through PA. There are a lot more hunters on the trail than I had imagined.").openPopup();
    let m29 = L.marker([40.513237, -76.346466]).addTo(map);
    m29.bindPopup("10/25/24 I stayed at the 501 shelter after completing 1,000 miles!").openPopup();
    let m30 = L.marker([40.400269, -77.009583]).addTo(map);
    m30.bindPopup("10/27/24 I crossed the Susquehanna River and enjoyed a sunrise as I crossed the bridge.").openPopup();
    let m31 = L.marker([40.075703, -77.195877]).addTo(map);
    m31.bindPopup("10/29/24 I stopped at the Green Mountain General Store for the half gallon challenge, which is definitely a challenge for the summer since we were freezing. I completed it in 40 mins.").openPopup();
    let m32 = L.marker([39.673370, -77.529554]).addTo(map);
    m32.bindPopup("10/31/24 I crossed the state line into MD which is my home state! It was also interesting seeing the smoldering remains for the recent wild fire.").openPopup();
    let m33 = L.marker([39.323044, -77.730537]).addTo(map);
    m33.bindPopup("11/2/24 We crossed into Harpers Ferry where we stayed with the Yellow Deli for 2 night...it was an interesting experience.").openPopup();
    let m34 = L.marker([39.187939, -77.797997]).addTo(map);
    m34.bindPopup("11/4/24 Sherpa and I stayed at the Black Burn trail center where we had a wood stove to keep us warm and fresh fruit we had packed out.").openPopup();
    let m35 = L.marker([39.051952, -77.941635]).addTo(map);
    m35.bindPopup("11/6/24 We finished the roller coaster in one day! We were very sore and tired after we got in late at night, but it was a fun challenge!").openPopup();
    let m36 = L.marker([38.845959, -78.161349]).addTo(map);
    m36.bindPopup("11/8/24 Today we started the 100 mile journey through the Shenandoah Mountains and saw a bear!").openPopup();
    let m37 = L.marker([38.035954, -78.857086]).addTo(map);
    m37.bindPopup("11/13/24 We finished the Shenandoah Mountain range today, which were some of the best views we had seen since the White Mountains.").openPopup();
    let m38 = L.marker([37.817730, -79.070457]).addTo(map);
    m38.bindPopup("11/15/24 Today Sherpa and I climbed the Priest going SOBO where it was a 3,000ft ascent over 5 miles, which is very fun...and the confessional was a very entertaining read.").openPopup();
    let m39 = L.marker([37.633095, -79.451546]).addTo(map);
    m39.bindPopup("11/21/24 After all of that, we wrapped up the 2024 season by heading into Glasgow to stay at Stanimals hostel. It's incredibly bitter sweet and I am devistated that I didn't get to finish this year due to the hurricance, but that just means I get to do it all again! Peace and Love -Heisenberg").openPopup();
    

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

  for (let index = 1; index <= photoNum; index++) {
    const image = document.getElementById('image');
    const blogImage = document.createElement('img');
    blogImage.src = `photos/${index}.jpg`;
    blogImage.alt = `Image for blog ${index}`;
    blogImage.style.width = 'auto';
    blogImage.style.height = 'auto';
    image.appendChild(blogImage);
  }
  


