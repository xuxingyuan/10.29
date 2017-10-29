var express = require('express');
var router = express.Router();
var fs = require('fs')
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123woaini',
  database : 'item'
});

/* GET home page. */
router.get('/list', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	connection.query('SELECT id,name FROM baobao',function(err, rows, fields) {
			res.send(rows)
 	});
  
});
router.get('/detail', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*")
	connection.query('SELECT detail FROM baobao',function(err, rows, fields) {
			res.send(rows)
 	});
});

module.exports = router;
