import React, { useState } from 'react';
import './SelectClass.css'; // Unique CSS module for this component

const CardComponent = ({ isClassSelected, changeStatus }) => {
    const [year, setYear] = useState('');
    const [section, setSection] = useState('');
    const [subject, setSubject] = useState('');

    const handleAttendance = () => {
        // Handle attendance logic here

        if (year === '' || section === '' || subject === '') {
            alert("please select all the values");
            return;

        }
        changeStatus(!isClassSelected)




        console.log('Attendance taken for:', { year, section, subject });
    };

    return (
        <div className="card-container">
            <div className="card">
                <h2>Take Attendance</h2>
                <div className="input-group">
                    <label htmlFor="year">Year:</label>
                    <select
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="custom-select"
                    >
                        <option value="">Select Year</option>
                        <option value="1">Year 1</option>
                        <option value="2">Year 2</option>
                        <option value="3">Year 3</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="section">Section:</label>
                    <select
                        id="section"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        className="custom-select"
                    >
                        <option value="">Select Section</option>
                        <option value="A">Section A</option>
                        <option value="B">Section B</option>
                        <option value="C">Section C</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="subject">Subject:</label>
                    <select
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="custom-select"
                    >
                        <option value="">Select Subject</option>
                        <option value="Math">Math</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <button onClick={handleAttendance} className="custom-button">
                    Take Attendance
                </button>
            </div>
        </div>
    );
};

export default CardComponent;
