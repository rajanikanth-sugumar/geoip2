const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./db/geo.db');
var insertQuery = 'INSERT INTO GEO (IP,LAT,LON) VALUES ("Test Value1","Test Value2","Test Value3");';
            
db.run(insertQuery , (err) => {
if(err) return;
console.log("Record Inserted");
});