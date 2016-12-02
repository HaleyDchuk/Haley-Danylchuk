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

// var BackpackItem = new mongoose.Schema({
// 	name: String, 
// 	quantity: Number, 
// 	price: String, 
// 	description: String, 
// 	url: String 
// }); 

// var BackpackList = new mongoose.Scheme({
// 	backpackEquipment: [BackpackItem]
// }); 

// var Destination = new mongoose.Schema({
// 	location: String, 
// 	description: String, 
// 	url: String
// }); 

// var DestinationList = new mongoose.Scheme({
// 	places: [Destination]
// }); 

mongoose.model('Kayak_Item', Kayak_Item); 
mongoose.model('Kayak_List', Kayak_List); 
// mongoose.model('BackpackItem', Backpack_Item); 
// mongoose.model('BackpackList', Backpack_List); 
// mongoose.model('Desintation', Destination); 
// mongoose.model('DesintationList', DestinationList); 


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
