import React, { useState, useEffect } from 'react';
import './Card.css'; // Import scoped CSS file

const Card = ({ name, rollNo }) => {
    const [present, setPresent] = useState(false); // Default present status to false
    const [timeLeft, setTimeLeft] = useState(10); // Initial time left

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Toggle Present/Absent status
    const toggleAttendance = (attendance) => {
        if (attendance === 'present') {
            setPresent(true);
        } else {
            setPresent(false);
        }
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="info">
                    <p>Name: {name}</p>
                    <p>Roll No: {rollNo}</p>
                    <p>Time Left: {timeLeft}</p>
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
