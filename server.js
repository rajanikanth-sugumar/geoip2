const express = require("express");
const app = express();
const fs = require('fs');
const router = express.Router();
var bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const pug = require('pug');
const path = require('path');
let db = new sqlite3.Database('./db/geo.db');
var ip;
var lat;
var lon;

app.use(express.static("public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

router.get('/index.html', (req, res) => 
{

})

app.post('/', function(req, res)
{
 
  let gip = ""; 
  let glat = "";
  let glon = "";
  
  gip = JSON.stringify(req.body.ip);
  glat = JSON.stringify(req.body.lat);
  glon = JSON.stringify(req.body.lon);
  
  console.log(req.body.ip);
  console.log(req.body.lat);
  console.log(req.body.lon);
  //console.log(geoloc);
  
  
  let myObj = {   
    geoip: gip,
    geolat: glat,
    geolon: glon,
    
  };
  
    var insertQuery = 'INSERT INTO GEO (IP,LAT,LON) VALUES (:geoip,:geolat,:geolon)';
    db.run(insertQuery , [myObj.geoip,myObj.geolat,myObj.geolon], (err) => {
	  if(err) return;
  
		
		});   
      
});
    
//Listening
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
