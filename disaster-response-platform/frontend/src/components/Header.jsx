// frontend/src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { account } from '../utils/appwrite';

const Header = ({ user, onLogout }) => {
    const location = useLocation();

    const handleLogout = async () => {
        try {
            await account.deleteSession('current');
            onLogout();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const navItems = [
        { path: '/', label: 'Dashboard', icon: '📊' },
        { path: '/map', label: 'Crisis Map', icon: '🗺️' },
        { path: '/resources', label: 'Resources', icon: '📦' },
        { path: '/volunteers', label: 'Volunteers', icon: '👥' },
        { path: '/alerts', label: 'Alerts', icon: '🚨' }
    ];

    return (
        <header className="header">
            <div className="header-brand">
                <h1>🚨 Disaster Response</h1>
            </div>

            <nav className="header-nav">
                {navItems.map(item => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="header-user">
                <span>Welcome, {user?.name || user?.email}</span>
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;