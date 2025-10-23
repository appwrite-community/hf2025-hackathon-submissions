// frontend/src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { databases, DATABASE_ID, CRISIS_COLLECTION_ID, RESOURCES_COLLECTION_ID, VOLUNTEERS_COLLECTION_ID } from '../utils/appwrite';
import CrisisForm from '../components/CrisisForm';

const Dashboard = () => {
    const [stats, setStats] = useState({
        activeCrises: 0,
        availableResources: 0,
        activeVolunteers: 0,
        totalAlerts: 0
    });
    const [recentCrises, setRecentCrises] = useState([]);
    const [showCrisisForm, setShowCrisisForm] = useState(false);

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            // Load crises
            const crises = await databases.listDocuments(DATABASE_ID, CRISIS_COLLECTION_ID);
            const activeCrises = crises.documents.filter(c => c.status === 'active');

            // Load resources
            const resources = await databases.listDocuments(DATABASE_ID, RESOURCES_COLLECTION_ID);
            const availableResources = resources.documents.filter(r => r.status === 'available');

            // Load volunteers
            const volunteers = await databases.listDocuments(DATABASE_ID, VOLUNTEERS_COLLECTION_ID);
            const activeVolunteers = volunteers.documents.filter(v => v.availability === 'available');

            setStats({
                activeCrises: activeCrises.length,
                availableResources: availableResources.length,
                activeVolunteers: activeVolunteers.length,
                totalAlerts: crises.documents.length
            });

            setRecentCrises(crises.documents.slice(0, 5));
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        }
    };

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Emergency Response Dashboard</h1>
                <button
                    onClick={() => setShowCrisisForm(true)}
                    className="btn-primary"
                >
                    Report New Crisis
                </button>
            </div>

            {/* Statistics Grid */}
            <div className="stats-grid">
                <div className="stat-card critical">
                    <h3>Active Crises</h3>
                    <div className="stat-number">{stats.activeCrises}</div>
                    <p>Requiring immediate attention</p>
                </div>

                <div className="stat-card warning">
                    <h3>Available Resources</h3>
                    <div className="stat-number">{stats.availableResources}</div>
                    <p>Ready for deployment</p>
                </div>

                <div className="stat-card info">
                    <h3>Active Volunteers</h3>
                    <div className="stat-number">{stats.activeVolunteers}</div>
                    <p>Ready to help</p>
                </div>

                <div className="stat-card success">
                    <h3>Total Responses</h3>
                    <div className="stat-number">{stats.totalAlerts}</div>
                    <p>All time responses</p>
                </div>
            </div>

            {/* Recent Crises */}
            <div className="recent-crises">
                <h2>Recent Crisis Reports</h2>
                <div className="crises-list">
                    {recentCrises.map(crisis => (
                        <div key={crisis.$id} className="crisis-item">
                            <div className="crisis-severity" data-severity={crisis.severity}>
                                {crisis.severity}
                            </div>
                            <div className="crisis-info">
                                <h4>{crisis.title}</h4>
                                <p>{crisis.location}</p>
                                <small>{new Date(crisis.$createdAt).toLocaleDateString()}</small>
                            </div>
                            <div className="crisis-status" data-status={crisis.status}>
                                {crisis.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showCrisisForm && (
                <CrisisForm
                    onClose={() => {
                        setShowCrisisForm(false);
                        loadDashboardData();
                    }}
                />
            )}
        </div>
    );
};

export default Dashboard;