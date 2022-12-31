const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./db/geo.db');
var selectQuery = 'SELECT * FROM GEO ;'
  
db.all(selectQuery , (err , data) => {
if(err) return;
console.log(data);
});      