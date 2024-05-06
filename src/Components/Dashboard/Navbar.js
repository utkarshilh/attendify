// import React from 'react'
// import { Link } from 'react-router-dom'

// import './Navbar.css'

// import Takeattendance from './Teacher/Takeattendance'
// import Viewattendance from './Teacher/Viewattendance'
import Dashboard from './Dashboard'


// export default function Navbar() {


//     const userName = "utkarsh"
//     return (

//         <nav className="navbar">

//             {/* <div className="user-info">
//                 <p>Welcome, {userName}</p>
//             </div> */}

//             <ul>
//                 <li>   <p>Welcome, {userName}</p></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>

//                 <li></li>


//                 <li><Link to="/">Dashboard</Link></li>
//                 <li><Link to="/take-attendance">Take Attendance</Link></li>
//                 <li><Link to="/view-attendance">View Attendance</Link></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>


//             </ul>


//         </nav>
//     )
// }












import Takeattendance from './Teacher/Takeattendance'
import Viewattendance from './Teacher/Viewattendance'


import { Link } from 'react-router-dom'
import React from "react";
import './Navbar.css'
import { useState, useEffect } from "react";
import { navbar } from '@material-tailwind/react';


export default function Navbar() {



    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.toggle-btn')) {
                setSidebarOpen(false);
            }
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, [sidebarOpen]);



    const userName = "utkarsh"

    const handleButtonClick = (componet) => {


        switch (componet) {
            case 'Dashboard':
                return (<Dashboard />)
        }

    }
    return (


        <div className="app-container">
            {!sidebarOpen && (
                <button className="toggle-btn" onClick={toggleSidebar}>
                    Show Sidebar
                </button>
            )}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="user-icon">
                    <img src="user-icon.png" alt="User Icon" />
                </div>
                <div className="sidebar-content">
                    <div className="sidebar-item" onClick={() => handleButtonClick('Dashboard')}>
                        Dashboard
                    </div>
                    <div className="sidebar-item">Trending</div>
                    <div className="sidebar-item">Subscriptions</div>
                    <div className="sidebar-item">Library</div>
                </div>
            </div>
            <div className="main-content">
                {/* Main content here */}
                {/* <h1>Hello how are you</h1> */}
            </div>
        </div>

    )
}

