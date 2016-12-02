document.addEventListener("DOMContentLoaded", function(event) {

	var yourScore = document.createElement("h3"); 
	var text = document.createTextNode("hello this is a test"); 
	yourScore.appendChild(text); 
	document.body.appendChild(yourScore); 


    console.log("DOM fully loaded and parsed");
  });
