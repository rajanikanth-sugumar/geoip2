const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./db/geo.db');
var createQuery = 'DROP TABLE GEO;';

db.run(createQuery , (err) => {
if(err) return;
console.log("Table Dropped");
});