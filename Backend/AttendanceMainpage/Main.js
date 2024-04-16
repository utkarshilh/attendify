const app = require('../Connection/index')
var mysql = require('mysql');


const cors = require("cors");
app.use(cors());








app.get('/hello', (req, res) => {
    res.send("hello jethalal");

})


















