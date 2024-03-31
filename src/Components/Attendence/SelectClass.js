import React from 'react'
import { useState } from 'react';

import './SelectClass.css'
export default function SelectClass() {

    const [year, setYear] = useState('');
    const [section, setSection] = useState('');
    const [subject, setSubject] = useState('');

    const handleAttendance = () => {
        // Handle attendance logic here
        console.log('Attendance taken for:', { year, section, subject });
    };

    return (
        <div className="card-container">
            <div className="card">
                <h2>Take Attendance</h2>
                <div className="input-group">
                    <label htmlFor="year">Year:</label>
                    <input
                        type="text"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="section">Section:</label>
                    <input
                        type="text"
                        id="section"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <button onClick={handleAttendance}>Take Attendance</button>
            </div>
        </div>
    );
}
