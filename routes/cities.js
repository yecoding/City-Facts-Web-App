const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const Fuse = require('../node_modules/fuse.js/dist/fuse');



// MySQL connection

con.connect(function(err){
	if(err){throw err;}
	console.log('MySQL connected');
});

//Get citydata
var tables = [];

let sql = 'SELECT Name, Population FROM city';
		con.query(sql, function(err, result){
		if(err){throw err;};
		tables = result;
	});

//Set Fuse.js Options

var options = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "Name"
]
};


//Population
router.get('/population', (req, res, next)=>{
	
		// var cityname = req.query.name;
		// var citypopulation = -1;

		// for (var i = 0; i <= tables.length-1; i++) {
		// 	if (cityname == tables[i].Name){
		// 		citypopulation = tables[i].Population;		}
		// }

		// if(citypopulation != -1){
		// 	res.status('200').send(citypopulation.toString());
		// }else{
		// 	res.status('200').send("Not Available");
		// }

		var cityname = req.query.name;
		console.log(cityname);
		var fuse = new Fuse(tables, options);
		var searchResult = fuse.search(cityname);

		if(searchResult.length == 0){
			console.log('not found');
			res.status(204).send();

		}else{
			console.log(searchResult);
			res.status(200).send(searchResult[0]);
		}
});


module.exports = router;