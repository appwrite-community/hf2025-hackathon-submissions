// frontend/src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { account } from './utils/appwrite';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CrisisMap from './pages/CrisisMap';
import Resources from './pages/Resources';
import Volunteers from './pages/Volunteers';
import Alerts from './pages/Alerts';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/App.css';




function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const userData = await account.get();
            setUser(userData);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <Router>
            <div className="app">
                {user ? (
                    <>
                        <Header user={user} onLogout={() => setUser(null)} />
                        <main className="main-content">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/map" element={<CrisisMap />} />
                                <Route path="/resources" element={<Resources />} />
                                <Route path="/volunteers" element={<Volunteers />} />
                                <Route path="/alerts" element={<Alerts />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </main>
                    </>
                ) : (
                    <Routes>
                        <Route path="/login" element={<Login onLogin={setUser} />} />
                        <Route path="/register" element={<Register onRegister={setUser} />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
}

export default App;