document.addEventListener("DOMContentLoaded", function(event) {

	var test = document.createElement('h4'); 
			var mess = document.createTextNode("TESTING"); 
			test.appendChild(mess); 
			document.body.appendChild(test); 

	var kayakButton = document.getElementById("kayakSubmit"); 
	kayakButton.addEventListener('click', kayakValidate); 

	function kayakValidate(event){
		console.log("event"); 
		console.log(event); 
		 
		var kName = document.getElementById('kayakName').value; 
		var kQuantity = document.getElementById('kayakQuantity').value; 
		var kPrice = document.getElementById('kayakPrice').value; 
		var kDescription = document.getElementById('kayakDescription').value; 
		var kUrl = document.getElementById('kayakUrl').value; 

		if(kName == "" || kQuantity == "" || kPrice == "" || kDescription == "" || kUrl == "" || kName == null){
			console.log("we made it in the if!"); 
			var error = document.getElementById('error-message'); 
			//var message = document.createTextNode("Please fill out all of the fields before submitting"); 
			//error.appendChild(message); 
			
			error.innerHTML = "Please fill out all of the fields before submitting"; 
			var element = document.getElementById('error-message').style.display = "inline"; 

			

		}
	}


    console.log("DOM fully loaded and parsed");
  });
