document.addEventListener("DOMContentLoaded", function(event) {



	
	//destinations validate 
	var destinationButton = document.getElementById("destinationSubmit"); 
	destinationButton.addEventListener('click', destinationValidate); 

	function destinationValidate(event){
		
		console.log("event"); 
		console.log(event); 
		 
		var dLocation = document.getElementById('destinationLocation').value; 

		var dDescription = document.getElementById('destinationDescription').value; 
		var dUrl = document.getElementById('destinationUrl').value; 

		if(dLocation == "" || dDescription == "" || dUrl == ""){
			event.preventDefault(); 
			console.log("we made it in the if for destination page!"); 
			var destinationError = document.getElementById('error-message-destination'); 
			//var message = document.createTextNode("Please fill out all of the fields before submitting"); 
			//error.appendChild(message); 
			
		destinationError.innerHTML = "Please fill out all of the fields before submitting"; 
			var element = document.getElementById('error-message-destination').style.display = "inline"; 

			

		}
	}


    console.log("DOM fully loaded and parsed");
  });

