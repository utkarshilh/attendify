import React from "react";
import './Test.css'
import { useState, useEffect } from "react";

export default function Test() {

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
                    <div className="sidebar-item">Dashboard</div>
                    <div className="sidebar-item">Trending</div>
                    <div className="sidebar-item">Subscriptions</div>
                    <div className="sidebar-item">Library</div>
                </div>
            </div>
            <div className="main-content">
                {/* Main content here */}
            </div>
        </div>
    )
}
