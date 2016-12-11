//document.addEventListener("DOMContentLoaded", function(event) {

	var foot = document.getElementById('footer'); 

	
	var classes = [{title: "Applied Internet Technology", section: "001", id: "CSCI-UA.0480", day: "Tues/Thurs", time: "9:30 am", professor: "Joe Versoza"},  {title: "Operating Systems", section: "001", id: "CSCI-UA.202", day: "Tues/Thurs", time: "2:00 pm", professor: "Alan Gottlieb"}, {title: "Basic Algorithms", section: "002", id: "CSCI-UA.200", day: "Tues/Thurs", time: "3:30 pm", professor: "Alan Siegel"}];  


	function thisFunction(letter){
		return letter.title == "Applied Internet Technology"; 	
	}
var work = classes.filter(thisFunction); 
console.log("PLEASE WORK"); 
console.log(work); 

	function makingFooter(info){
		return info.title; 
	}

	var classTitle = work.map(makingFooter); 
	console.log("CLASS TITLE"); 
	console.log(classTitle); 

	function getSection(info){
		return info.section; 	
	}

	var classSection = work.map(getSection); 
console.log(classSection); 

	function getProfessor(info){
		var name = "Professor "; 
		name += info.professor; 
		return name; 
	}

var classProfessor = work.map(getProfessor); 
console.log(classProfessor); 

	
// 	function getClass(class){
// 	return class.title == "Applied Internet Technology"; 	
// }

// var work = classes.filter(getClass); 
// console.log("PLEASE WORK"); 
// console.log(work); 	

//var thisClass = "Applied Internet Technology"; 
	//console.log("classes"); 
	//console.log(classes); 

var numbers = [4, 9, 16, 25];

function double(val){
	return val * 2; 	
}

var fil = numbers.map(double); 
console.log("using map"); 
console.log(fil); 


var names = ['a', 'b', 'c'];

function add(letter){
	return letter.title + 'g'; 	
}

// function thisFunction(letter){
// 	return letter.title == "Applied Internet Technology"; 	
// }
// var work = classes.filter(thisFunction); 
// console.log("PLEASE WORK"); 
// console.log(work); 

var fill = classes.map(add); 
console.log("map letters"); 
console.log(fill); 
	
// 	function isBigEnough(val){
// 		return val >= 10; 	
// 	}

// var filtered = [12, 14, 5].filter(isBigEnough); 

// console.log("Filtered"); 
// console.log(filtered); 

// 	var c = ["Applied Internet Technology", "OS", "BASIC ALGORITHMS"]; 
// //console.log(classes.title); 
// 	function importantClass(class) {
// 		return class == "Applied Internet Technology"; 	
// 	}

// 	var filtered = ["Applied Internet Technology", "OS", "BASIC ALGORITHMS"].filter(importantClass); 
// 	console.log("FILTERED"); 
// 	console.log(filtered); 

	
// 	var importantClass = classes.filter(function(class){
// 		return class.title === thisClass; 
// 	}); 
	
	//console.log("AIT"); 
	//console.log(importantClass); 
	


    //console.log("DOM fully loaded and parsed");
  //});
