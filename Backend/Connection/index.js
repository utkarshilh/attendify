const mysql = require('mysql');
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ishaan@123",
    database: 'attendify'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


const app = express();
app.use(cors());

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = 5001;
app.listen(PORT, () => {

    const query = "insert into "
    console.log(`Server is listening on port ${PORT}`);
});













app.post('/getMainList', (req, res) => {

    const SqlQuery = "SELECT * FROM attendify.Student";
    con.query(SqlQuery, (err, result) => {
        if (err) {
            console.log(err)
            result.send(err)

        }
        else {

            res.send(result);
        }
    })


})



// app.post('/submitAttendance', (req, res) => {
//     const records = req.body.records
//     // console.log(JSON.stringify(records))

//     const subjectId = req.body.classs + req.body.section + req.body.subject;
//     const sectionId = req.body.classs + req.body.section;
//     const date = new Date();
//     const currendDate = date.getDate();
//     const currentMonth = date.getMonth();
//     const curretYear = date.getYear();
//     const teacherId = '05321';
//     // attendanceId will be the sum of teacherId + currentDate + currentMonth + currentyear + classId + sectionId


//     for (let i = 0; i < records.length; i++) {
//         const attendanceId = teacherId + currendDate + currentMonth + curretYear + sectionId + records[i].studentId;


//         const query = `INSERT INTO attendify.Attendance (attendanceId, studentId, subjectId, date,status, teacherId) 
//         VALUES (?, ?, ?, ?) `


//         con.query(query, [attendanceId, records[i].studentId, subjectId, date, records[i].status, teacherId], (error, result, field) => {
//             if (error) {
//                 console.log(error);

//             }
//             else {
//                 console.log("inserted successfully");
//             }
//         })
//     }

//     // console.log("this is attendanceId" + attendanceId)







//     // const qury1 = `INSERT INTO attendify.Attendance (attendanceId,studentId, subjectId, date) VALUES ('1', '2', '6', '88');`





//     // console.log(subjectId + sectionId);



//     // res.send("hello");
// })

app.post('/submitAttendance', async (req, res) => {
    const records = req.body.records;
    const subjectId = req.body.classs + req.body.section + req.body.subject;
    const sectionId = req.body.classs + req.body.section;
    const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format date as MySQL DATETIME
    const teacherId = '05321';
    const attendanceId = teacherId + date.replace(/-|:| /g, '') + sectionId; // Generate attendanceId

    try {
        for (let i = 0; i < records.length; i++) {
            const attendanceId = teacherId + date.replace(/-|:| /g, '') + sectionId + records[i].studentId;
            const query = `INSERT INTO attendify.Attendance (attendanceId, studentId, subjectId, date, status, teacherId) VALUES (?, ?, ?, ?, ?, ?);`;
            await executeQuery(query, [attendanceId, records[i].studentId, subjectId, date, records[i].status, teacherId]);
            console.log("Record inserted successfully");
        }
        res.status(200).send("Attendance submitted successfully");
    } catch (error) {
        console.error("Error inserting record:", error);
        res.status(500).send("Internal Server Error");
    }
});

function executeQuery(query, values) {
    return new Promise((resolve, reject) => {
        con.query(query, values, (error, result, field) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}



