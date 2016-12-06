var contentBtn = document.querySelector('button');

function loadContent() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Parse text into JSON object and assign data to a variable
      var response = JSON.parse(xhr.responseText);
      console.log(response);
      // Access temperature value with dot syntax
      var temperature = response.main.temp;
      // Round to nearest integer
      var tempFormatted = Math.round(temperature);
      // Write to page
      var convert = ((tempFormatted * 9)/5) - 459.67. 
      
      console.log("temp formated"); 
      console.log(tempFormatted); 
      console.log("converted"); 
      console.log(convert); 
      document.querySelector('main').innerHTML = '<p>' + tempFormatted + '°</p>';
    }
  };

  // Prepare the request
  xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Paihia,nz&appid=c5ddb19e5df75b259cd0e5aaafc1f2c3", true);
  xhr.send();
}

contentBtn.addEventListener('click', loadContent, false);
