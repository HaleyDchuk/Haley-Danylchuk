// //var contentBtn = document.querySelector('button');

// function loadContent() {
//   var xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       // Parse text into JSON object and assign data to a variable
//       var response = JSON.parse(xhr.responseText);
//       console.log(response);
//       // Access temperature value with dot syntax
//       var temperature = response.main.temp;
//       // Round to nearest integer
//       var tempFormatted = Math.round(temperature);
//       // Write to page
//       var convert = ((tempFormatted * 9)/5) - 459.67. 
      
//       console.log("temp formated"); 
//       console.log(tempFormatted); 
//       console.log("converted"); 
//       console.log(convert); 
//       document.querySelector('main').innerHTML = '<p>' + tempFormatted + '°</p>';
//     }
//   };

//   // Prepare the request
//   xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Paihia,nz&appid=c5ddb19e5df75b259cd0e5aaafc1f2c3", true);
//   xhr.send();
// }

// window.addEventListener('load', loadContent, false);
// //contentBtn.addEventListener('click', loadContent, false);

function loadContent() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Parse text into JSON object and assign data to a variable
      var response = JSON.parse(xhr.responseText);
      console.log(response);

      // Call function to apply HTML and CSS changes with weather data
      applyData(response);
    }
  };

  // Prepare the request
  xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Paihia,nz&appid=c5ddb19e5df75b259cd0e5aaafc1f2c3", true);
  xhr.send();
}

function applyData(weatherData) {
  // Access humidity value with dot syntax
  var temperature = weatherData.main.temp; 
  var tempFormatted = Math.round(temperature);
  var convert = ((tempFormatted * 9)/5) - 459.67; 
  console.log("CONVERT"); 
  console.log(convert); 
  var humidity = weatherData.main.humidity;
//   var description = weatherData.weather.description; 
  // Write to page
  document.getElementById('temp').textContent = 'Temperature: ' + convert + '°';
  document.getElementById('hum').textContent = 'Humidity: ' + humidity + '%';
  //document.getElementById('des').textContent = 'Description: ' + description;
      
      

     
  
  // Map value accordingly for CSS application
  //var blurExtent = Math.round(humidity/10);
  //console.log(blurExtent);
  // Construct the CSS value
  //var blurValue = "blur(" + blurExtent + "px)";
  // CSS blur filter (standard syntax)
  //document.querySelector('img').style.filter = blurValue;
  // CSS blur filter (interim syntax for Chrome and Opera)
  //document.querySelector('img').style.WebkitFilter = blurValue;
  // CSS filters are still rather new and not supported in all browsers
}

window.addEventListener('load', loadContent, false);
