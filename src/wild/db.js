var mongoose = require('mongoose'); 
var URLSlugs = require('mongoose-url-slugs'); 

var Kayak_Item = new mongoose.Schema({
	name: String, 
	quantity: Number, 
	price: String, 
	description: String, 
	url: String 
}); 

var Kayak_List = new mongoose.Schema({
	kayak_equipment: [Kayak_Item]
}); 

var Backpack_Item = new mongoose.Schema({
	name: String, 
	quantity: Number, 
	price: String, 
	description: String, 
	url: String 
}); 

var Destination = new mongoose.Schema({
	location: String, 
	description: String, 
	url: String
}); 

mongoose.model('Kayak_Item', Kayak_Item); 
mongoose.model('Kayak_List', Kayak_List); 
mongoose.model('Backpack_Item', Backpack_Item); 
mongoose.model('Desintation', Destination); 

mongoose.connect('mongodb://localhost/final_proj'); 