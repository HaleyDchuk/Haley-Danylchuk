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
      document.querySelector('main').innerHTML = '<p>' + tempFormatted + '°</p>';
    }
  };

  // Prepare the request
  xhr.open("GET", "api-request.php", true);
  xhr.send();
}

contentBtn.addEventListener('click', loadContent, false);
