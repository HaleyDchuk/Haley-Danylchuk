document.addEventListener("DOMContentLoaded", function(event) {

	

	var kayakButton = document.getElementById("kayakSubmit"); 
	kayakButton.addEventListener('click', kayakValidate); 

	function kayakValidate(event){
		var kName = document.getElementById('kayakName').value; 
		var kQuantity = document.getElementById('kayakQuantity').value; 
		var kPrice = document.getElementById('kayakPrice').value; 
		var kDescription = document.getElementById('kayakDescription').value; 
		var kUrl = document.getElementById('kayakUrl').value; 

		if(kName == "" || kQuantity == "" || kPrice == "" || kDescription == "" || kUrl == "" || kName == null){
			var error = document.createElement('h4'); 
			var message = document.createTextNode("Please fill out all of the fields before submitting"); 
			error.appendChild(message); 
			document.body.appendChild(error); 


		}
	}


    console.log("DOM fully loaded and parsed");
  });
