import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Dashboard from './Dashboard'
import Takeattendance from './Teacher/Takeattendance'
import Viewattendance from './Teacher/Viewattendance'



export default function Landingpage() {

    const handleLogout = () => {
        // Implement logout logic here
    };
    return (
        <Router>
            <div className="container">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/take-attendance" element={<Takeattendance />} />
                        <Route path="/view-attendance" element={<Viewattendance />} />
                    </Routes>
                </div>

            </div>
        </Router>
    )
}
