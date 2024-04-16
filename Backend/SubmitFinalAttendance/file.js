const myObj = require('../Connection/index')
var mysql = require('mysql');

const con = myObj.con;
const app = myObj.app;

const cors = require("cors");
app.use(cors());

