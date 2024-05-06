import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Dashboard from './Dashboard'
import Takeattendance from './Teacher/Takeattendance'
import Viewattendance from './Teacher/Viewattendance'
import IsClassSelected from '../Conditional/IsClassSelected';



export default function Landingpage() {

    const handleLogout = () => {
        // Implement logout logic here
    };
    return (
        <Router>

            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/take-attendance" element={<IsClassSelected />} />
                    <Route path="/view-attendance" element={<Viewattendance />} />
                </Routes>
            </div>


        </Router>
    )
}
