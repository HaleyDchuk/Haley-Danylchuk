//document.addEventListener("DOMContentLoaded", function(event) {
	
	var classes = [{title: "Applied Internet Technology", section: "001", id: "CSCI-UA.0480", day: "Tues/Thurs", time: "9:30 am", professor: "Joe Versoza"},  {title: "Operating Systems", section: "001", id: "CSCI-UA.202", day: "Tues/Thurs", time: "2:00 pm", professor: "Alan Gottlieb"}, {title: "Basic Algorithms", section: "002", id: "CSCI-UA.200", day: "Tues/Thurs", time: "3:30 pm", professor: "Alan Siegel"}];  
	var thisClass = "Applied Internet Technology"; 
	console.log("classes"); 
	console.log(classes); 

	
	var importantClass = classes.filter(function(class){
		return class.title === thisClass; 
	}); 
	
	console.log("AIT"); 
	console.log(importantClass); 
	


    //console.log("DOM fully loaded and parsed");
  //});
