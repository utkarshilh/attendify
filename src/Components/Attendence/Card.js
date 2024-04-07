import React, { useState, useEffect } from 'react';
import './Card.css'; // Import scoped CSS file
import axios from 'axios';

import FinalList from './FinalList';

const Card = ({ attendanceRecords, updateAttendenceRecord, updateAttendenceDone }) => {

    const [renderFinalList, setRenderFinalList] = useState(false);

    const [buttonClicked, setButtonClicked] = useState(false);
    // const [attendanceRecords, setAttendanceRecords] = useState([]); // State to store attendance records

    const [present, setPresent] = useState(false); // Default present status to false
    const [timeLeft, setTimeLeft] = useState(10); // Initial time left
    const [students, setStudents] = useState([
        {
            roll: 1,
            name: "utkarsh"
        },
        {
            roll: 2,
            name: "harsh",
        },
        {
            roll: 3,
            name: "kiran"
        },
        {
            roll: 4,
            name: "shikhar"
        },
        {
            roll: 5,
            name: "shikhar"
        },
        {
            roll: 6,
            name: "hitj"
        }
    ])

    const [i, setI] = useState(0); // Initialize index i with 0

    useEffect(() => {
        axios.get('http://localhost:5001/getMainList').then(function (response) {
            const { data } = response;
            console.log(data)
            setStudents(data);

        })
            .catch(error => {

                console.log(error);

            })
    }, [])

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            // If timer reaches 0, record attendance as absent
            recordAttendance('absent', i);
            setTimeLeft(10);
        }
        if (buttonClicked === true) {
            // If button is clicked, record attendance based on present status
            recordAttendance(present ? 'present' : 'absent', i);
            setButtonClicked(false);
            setTimeLeft(10);
        }



    }, [timeLeft, buttonClicked, present, i,]);

    useEffect(() => {
        console.log(i + " and" + students.length)

        if ((i + 1) === students.length) {

            updateAttendenceDone(true);

        }
    }, [i, students.length])


    // Function to record attendance
    const recordAttendance = (status, prevI) => {
        const record = {
            name: students[prevI].name,
            roll: students[prevI].rollNo,
            status: status
        };

        updateAttendenceRecord(prevRecords => [...prevRecords, record]);
        setI((prevI) => (prevI + 1) % students.length);
        console.log(attendanceRecords);

        // Call another component if `prevI` reaches the size of `students` array
        // if ((prevI + 1) === students.length) {
        //     console.log("hello")

        //     return <FinalList attendanceRecords={attendanceRecords} />;
        // }
    };

    // Toggle Present/Absent status
    const toggleAttendance = (attendance) => {
        setButtonClicked(true);
        setPresent(attendance === 'present' ? true : false);
    };
    return (
        <div className="card-container">
            <div className="card">
                <div className="info">
                    <h1>{timeLeft}</h1>
                    <p>Name: {students[i].name}</p>
                    <p>Roll No: {students[i].rollNo}</p>
                </div>
                <div className="buttons">
                    <button className={`attendance-button present ${present ? 'active' : ''}`} onClick={() => toggleAttendance('present')}>
                        Present
                    </button>
                    <button className={`attendance-button absent ${!present ? 'active' : ''}`} onClick={() => toggleAttendance('absent')}>
                        Absent
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
