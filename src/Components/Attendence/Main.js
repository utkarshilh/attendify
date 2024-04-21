import React from 'react'
import Card from './Card'
import { useState } from 'react';
import FinalList from './FinalList';
export default function Main({ classs, section, subject, changeStatus }) {

    const [attendanceRecords, setAttendanceRecords] = useState([]);


    const [attendanceDone, setAttendanceDone] = useState(false);




    const updateAttendenceRecord = (newState) => {
        setAttendanceRecords(newState);




    }
    const updateAttendenceDone = (newState) => {
        console.log(newState);
        setAttendanceDone(newState);
    }
    return (
        <div>
            <h1>This is main page</h1>
            {(attendanceDone === true) ? <FinalList attendanceRecords={attendanceRecords} classs={classs} subject={subject} section={section} changeStatus={changeStatus} /> : <Card attendanceRecords={attendanceRecords} updateAttendenceRecord={updateAttendenceRecord} updateAttendenceDone={updateAttendenceDone} />}
        </div>
    )
}
