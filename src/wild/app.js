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
var Kayak_List = mongoose.model('Kayak_List'); 
var Kayak_Item = mongoose.model('Kayak_Item'); 



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
	
	Kayak_List.find(function(err, kayakList, count){
		console.log("all of the equipment: "); 
		console.log(kayakList); 
		res.render('kayaking', {
			kayakList: kayakList
		}); 
	}); 
	//res.render('kayaking'); 
	

}); 

router.get('/backpacking', function(req, res){
	res.render('backpacking'); 
}); 

router.get('/destinations', function(req, res){
	res.render('destinations'); 

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
	var kayak = new Kayak_List ({
		kayak_equipment: newKayakItem
		
	})

	kayak.save(function(err, kayakItem, count){

		console.log("SUCCESS"); 
		res.redirect('/kayaking'); 
	});
}); 



app.listen(3000);


