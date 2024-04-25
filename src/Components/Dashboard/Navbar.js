import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

import Takeattendance from './Teacher/Takeattendance'
import Viewattendance from './Teacher/Viewattendance'
import Dashboard from './Dashboard'


export default function Navbar() {


    const userName = "utkarsh"
    return (

        <nav className="navbar">

            <div className="user-info">
                <p>Welcome, {userName}</p> {/* Display user's name */}
            </div>

            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/take-attendance">Take Attendance</Link></li>
                <li><Link to="/view-attendance">View Attendance</Link></li>

            </ul>


        </nav>
    )
}
