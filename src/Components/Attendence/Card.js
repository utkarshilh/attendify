import React, { useState, useEffect } from 'react';
import './Card.css'; // Import scoped CSS file

const Card = ({ name, rollNo }) => {
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
        }
    ])

    const [i, setI] = useState(0);



    // Countdown timer effect
    useEffect(() => {
        if (timeLeft === 0)
            setI(i + 1)
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Toggle Present/Absent status
    const toggleAttendance = (attendance) => {
        if (attendance === 'present') {
            setI(i += 1);
            console.log(i);

            setPresent(true);

        } else {
            setPresent(false);
        }
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="info">
                    <h1>{timeLeft}</h1>
                    <p>Name: {students[i].name}</p>
                    <p>Roll No: {students[i].roll}</p>

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
