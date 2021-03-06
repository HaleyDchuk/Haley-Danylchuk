var mongoose = require('mongoose'); 
var URLSlugs = require('mongoose-url-slugs'); 

var KayakItem = new mongoose.Schema({
	name: String, 
	quantity: Number, 
	price: String, 
	description: String, 
	url: String 
}); 

var KayakList = new mongoose.Schema({
	kayakEquipment: [KayakItem]
}); 

var BackpackItem = new mongoose.Schema({
	name: String, 
	quantity: Number, 
	price: String, 
	description: String, 
	url: String 
}); 

var BackpackList = new mongoose.Schema({
	backpackEquipment: [BackpackItem]
}); 

var Destination = new mongoose.Schema({
	location: String, 
	description: String, 
	url: String, 
	type: String
}); 

var DestinationList = new mongoose.Schema({
	places: [Destination]
}); 

mongoose.model('KayakItem', KayakItem); 
mongoose.model('KayakList', KayakList); 
mongoose.model('BackpackItem', BackpackItem); 
mongoose.model('BackpackList', BackpackList); 
mongoose.model('Destination', Destination); 
mongoose.model('DestinationList', DestinationList); 


// is the environment variable, NODE_ENV, set to PRODUCTION? 
if (process.env.NODE_ENV == 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 console.log("IN PRO MODE"); 
 var fs = require('fs');
 var path = require('path');
 var fn = path.join(__dirname, 'config.json');
 var data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 var conf = JSON.parse(data);
 var dbconf = conf.dbconf;
} else {
	console.log("NOT IN PRO MODE"); 
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/hed248';
}

mongoose.connect(dbconf); 
