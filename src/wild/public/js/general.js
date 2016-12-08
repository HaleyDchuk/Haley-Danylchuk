//document.addEventListener("DOMContentLoaded", function(event) {
	
	var classes = [{title: "Applied Internet Technology", section: "001", id: "CSCI-UA.0480", day: "Tues/Thurs", time: "9:30 am", professor: "Joe Versoza"},  {title: "Operating Systems", section: "001", id: "CSCI-UA.202", day: "Tues/Thurs", time: "2:00 pm", professor: "Alan Gottlieb"}, {title: "Basic Algorithms", section: "002", id: "CSCI-UA.200", day: "Tues/Thurs", time: "3:30 pm", professor: "Alan Siegel"}];  
	var thisClass = "Applied Internet Technology"; 
	console.log("classes"); 
	console.log(classes); 
	
// 	function isBigEnough(val){
// 		return val >= 10; 	
// 	}

// var filtered = [12, 14, 5].filter(isBigEnough); 

// console.log("Filtered"); 
// console.log(filtered); 

	console.log("WHAT"); 
//console.log(classes.title); 
	function importantClass(class) {
		return class.title === "Applied Internet Technology"; 	
	}

	var filtered = classes.filter(importantClass); 
	console.log("FILTERED"); 
	console.log(filtered); 

	
// 	var importantClass = classes.filter(function(class){
// 		return class.title === thisClass; 
// 	}); 
	
	//console.log("AIT"); 
	//console.log(importantClass); 
	


    //console.log("DOM fully loaded and parsed");
  //});
