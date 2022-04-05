//====Nanigator.geolocation ///add this js file into script tag and run on live server to see the results

if (!navigator.geolocation) {
    console.error(`Your browser doesn't support Geolocation`);
  }
   navigator.geolocation.getCurrentPosition(position=>{
     console.log(position);
   })