import React from 'react'
import Card from './Card'
import { useState } from 'react';
export default function Main() {
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    const updateAttendenceRecord = (newState) => {
        setAttendanceRecords(newState);

        console.log("this is really very cool " + JSON.stringify(attendanceRecords))


    }
    return (
        <div>
            <h1>This is main page</h1>
            {<Card attendanceRecords={attendanceRecords} updateAttendenceRecord={updateAttendenceRecord} />}
        </div>
    )
}
