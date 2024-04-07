const myObj = require('../Connection/index')
var mysql = require('mysql');

const con = myObj.con;
const app = myObj.app;

const cors = require("cors");
app.use(cors());





// const query = "SELECT * FROM attendify.Student";


// con.query(query, function (err, result) {
//     if (err)
//         console.log(err)

//     else
//         console.log(result);
// })


















app.get('/hello', (req, res) => {
    res.send("hello jethalal");

})

app.get('/getMainList', (req, res) => {

    const SqlQuery = "SELECT * FROM attendify.Student";
    con.query(SqlQuery, (err, result) => {
        if (err) {
            console.log(err)
            result.send(err)

        }
        else {
            console.log(result);
            res.send(result);
        }
    })


})















