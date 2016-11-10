//Author: Haley Danylchuk 
//app.js for final project 

var express = require('express');
var router = express.Router();
//adding in 
var app = express(); 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/homepage', function(req, res, next){
	res.render('homepage'); 
}); 




module.exports = router;