document.addEventListener("DOMContentLoaded", function(event) {

	var test = document.createElement('h4'); 
			var mess = document.createTextNode("TESTING"); 
			test.appendChild(mess); 
			document.body.appendChild(test); 

	
	//backpack validate 
	var backpackButton = document.getElementById("backpackSubmit"); 
	backpackButton.addEventListener('click', backpackValidate); 

	function backpackValidate(event){
		
		console.log("event"); 
		console.log(event); 
		 
		var bName = document.getElementById('backpackName').value; 
		var bQuantity = document.getElementById('backpackQuantity').value; 
		var bPrice = document.getElementById('backpackPrice').value; 
		var bDescription = document.getElementById('backpackDescription').value; 
		var bUrl = document.getElementById('backpackUrl').value; 

		if(bName == "" || bQuantity == "" || bPrice == "" || bDescription == "" || bUrl == "" || bName == null){
			event.preventDefault(); 
			console.log("we made it in the if for backpacking page!"); 
			var backpackError = document.getElementById('error-message-backpack'); 
			//var message = document.createTextNode("Please fill out all of the fields before submitting"); 
			//error.appendChild(message); 
			
			backpackError.innerHTML = "Please fill out all of the fields before submitting"; 
			var element = document.getElementById('error-message-backpack').style.display = "inline"; 

			

		}
	}


    console.log("DOM fully loaded and parsed");
  });
