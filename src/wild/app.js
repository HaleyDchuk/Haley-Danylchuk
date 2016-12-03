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
// var BackpackList = mongoose.model('Backpack_List'); 
// var BackpackItem = mongoose.model('Backpack_Item'); 
// var KayakList = mongoose.model('Kayak_List'); 
// var KayakItem = mongoose.model('Kayak_Item'); 



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

router.get('/destinations', function(req, res){
	DestinationList.find(function(err, destinationList, count){
		console.log("all of the destinations: "); 
		console.log(destinationList); 
		res.render('destinations', {
			destinationList: destinationList
		}); 
	}); 

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


// router.post('/addBackpacking', function(req, res){
// 	var x; 
// 	var newBackpackItem = []; 
// 	if(req.body.backpackName !== undefined){
// 		var backpackItemObj = {
// 			name: req.body.backpackName,  
// 			quantity: req.body.backpackQuantity,
// 			price: req.body.backpackPrice, 
// 			description: req.body.backpackDescription,
// 			url: req.body.backpackUrl 

// 		}; 

// 		newKayakItem.push(kayakItemObj); 

// 		console.log("THIS IS ADDING TO THE KAYAK LIST"); 
// 		console.log(newKayakItem); 

// 	}
// 	var kayak = new KayakList ({
// 		kayakEquipment: newKayakItem
		
// 	})

// 	kayak.save(function(err, kayakItem, count){

// 		console.log("SUCCESS"); 
// 		res.redirect('/kayaking'); 
// 	});
// }); 



app.listen(14892);


