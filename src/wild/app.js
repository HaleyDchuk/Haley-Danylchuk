// app.js - final project WILD
//author: Haley Danylchuk 

var express = require('express');
var app = express();
var router = express.Router(); 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

var path = require("path");

// create a cross-platform compatible path name (don't just use public)
var publicPath = path.resolve(__dirname, "public");
//use built in static files middleware to serve up any file in publicPath 
app.use(express.static(publicPath));
 
require('./db'); 
//allows app to use router 
app.use(router); 

var mongoose = require('mongoose'); 
var KayakList = mongoose.model('KayakList'); 
var KayakItem = mongoose.model('KayakItem'); 
var BackpackList = mongoose.model('BackpackList'); 
var BackpackItem = mongoose.model('BackpackItem'); 
var DestinationList = mongoose.model('DestinationList'); 
var Destination = mongoose.model('Destination'); 



app.set('view engine', 'hbs');


router.get('/', function(req, res){
	
	res.render('homepage'); 

}); 

router.get('/homepage', function(req, res){
	
	res.render('homepage'); 

}); 

router.get('/equipment', function(req, res){
	res.render('equipment'); 

}); 


router.get('/kayaking', function(req, res){
	
	KayakList.find(function(err, kayakList, count){
		console.log("all of the equipment: "); 
		console.log(kayakList); 
		res.render('kayaking', {
			kayakList: kayakList
		}); 
	}); 
	//res.render('kayaking'); 
	

}); 

router.get('/backpacking', function(req, res){
	BackpackList.find(function(err, backpackList, count){
		console.log("all of the backpack equipment: "); 
		console.log(backpackList); 
		res.render('backpacking', {
			backpackList: backpackList
		}); 
	}); 
}); 

var destinationFilter; 
router.get('/destinations', function(req, res){
	
	var destType = req.query.typeFiltered; 
	destinationFilter = destType; 
	console.log("destination type:"); 
	console.log(destType); 
	if(destinationFilter == undefined || destinationFilter == ""){
	DestinationList.find({}, function(err, destinationList, count){
		console.log("all of the destinations not filtered: "); 
		console.log(destinationList); 
		res.render('destinations', {
			destinationList: destinationList
		}); 
	}); 
	} 
	else{
		DestinationList.find({}, function(err, destinationList, count){
			console.log("all of the destinations filtered: "); 
			console.log(destinationList);
			
			//select places that have the correct type
			
			//for each destination
			var newDest = []; 
// 			destinationList.forEach(function(destination){
			
// 				destination.places.forEach(function(place){
				
// 					if(place.type == destinationFilter){
// 						//add to new list
// 						newDest.push(destination); 
// 					}
// 				});
			
// 			})
			
			var x; 
			var y; 
			console.log("length"); 
			console.log(destinationList.length); 
			console.log(destinationList[0].places[0]); 
			
			for(x = 0; x < destinationList.length; x++){
				for(y = 0; y < destinationList[x].length; y++){
					console.log("IDK WHAT THIS IS"); 
					console.log(destinationList[x].places[y].type); 
				if(destinationList[x].places[y].type == destinationFilter){
					newDest.push(destinationList[x].places[y]); 	
					//break; 
				}
					console.log("NEW DEST LIST"); 
					console.log(newDest); 
				}
			}
			console.log("NEW LIST"); 
			console.log(newDest); 
			res.render('destinations', {
				destinationList: newDest
			}); 
		});
		
		
	}

}); 

// router.get('/kayaking/addKayaking', function(req, res){
// 	res.render('add'); 
// }); 

router.post('/addKayaking', function(req, res){
	var x; 
	var newKayakItem = []; 
	if(req.body.kayakName !== undefined){
		var kayakItemObj = {
			name: req.body.kayakName,  
			quantity: req.body.kayakQuantity,
			price: req.body.kayakPrice, 
			description: req.body.kayakDescription,
			url: req.body.kayakUrl 

		}; 

		newKayakItem.push(kayakItemObj); 

		console.log("THIS IS ADDING TO THE KAYAK LIST"); 
		console.log(newKayakItem); 

	}
	var kayak = new KayakList ({
		kayakEquipment: newKayakItem
		
	})

	kayak.save(function(err, kayakItem, count){

		console.log("SUCCESS"); 
		res.redirect('/kayaking'); 
	});
}); 


router.post('/addBackpacking', function(req, res){
	var x; 
	var newBackpackItem = []; 
	if(req.body.backpackName !== undefined){
		var backpackItemObj = {
			name: req.body.backpackName,  
			quantity: req.body.backpackQuantity,
			price: req.body.backpackPrice, 
			description: req.body.backpackDescription,
			url: req.body.backpackUrl 

		}; 

		newBackpackItem.push(backpackItemObj); 

		console.log("THIS IS ADDING TO THE BACKPACK LIST"); 
		console.log(newBackpackItem); 

	}
	var backpack = new BackpackList ({
		backpackEquipment: newBackpackItem
		
	})

	backpack.save(function(err, backpackItem, count){

		console.log("SUCCESS"); 
		res.redirect('/backpacking'); 
	});
}); 


router.post('/addDestination', function(req, res){
	var x; 
	var newDestinationItem = []; 
	if(req.body.destinationLocation !== undefined){
		var destinationObj = {
			location: req.body.destinationLocation,  
			description: req.body.destinationDescription,
			url: req.body.destinationUrl, 
			type: req.body.destinationType

		}; 

		newDestinationItem.push(destinationObj); 

		console.log("THIS IS ADDING TO THE DESTINATION LIST"); 
		console.log(newDestinationItem); 

	}
	var dest = new DestinationList ({
		places: newDestinationItem
		
	})

	dest.save(function(err, destinationItem, count){

		console.log("SUCCESS"); 
		res.redirect('/destinations'); 
	});
}); 



app.listen(14892);


