// frontend/src/components/CrisisForm.jsx
import React, { useState } from 'react';
import { databases, account, DATABASE_ID, CRISIS_COLLECTION_ID } from '../utils/appwrite';

const CrisisForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        coordinates: '',
        severity: 'medium',
        type: 'natural',
        status: 'active'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await account.get();

            await databases.createDocument(
                DATABASE_ID,
                CRISIS_COLLECTION_ID,
                'unique()',
                {
                    ...formData,
                    createdBy: user.$id,
                    reportedBy: user.name || user.email
                }
            );

            alert('Crisis reported successfully!');
            onClose();
        } catch (error) {
            console.error('Error reporting crisis:', error);
            alert('Error reporting crisis. Please try again.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Report New Crisis</h2>
                    <button onClick={onClose} className="close-btn">×</button>
                </div>

                <form onSubmit={handleSubmit} className="crisis-form">
                    <div className="form-group">
                        <label>Crisis Title *</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Brief description of the crisis"
                        />
                    </div>

                    <div className="form-group">
                        <label>Description *</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Detailed information about the crisis situation..."
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Location *</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                placeholder="City, Area, Landmark"
                            />
                        </div>

                        <div className="form-group">
                            <label>Coordinates</label>
                            <input
                                type="text"
                                name="coordinates"
                                value={formData.coordinates}
                                onChange={handleChange}
                                placeholder="Latitude, Longitude (optional)"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Severity Level *</label>
                            <select name="severity" value={formData.severity} onChange={handleChange}>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Crisis Type *</label>
                            <select name="type" value={formData.type} onChange={handleChange}>
                                <option value="natural">Natural Disaster</option>
                                <option value="medical">Medical Emergency</option>
                                <option value="infrastructure">Infrastructure Failure</option>
                                <option value="conflict">Conflict/Violence</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" onClick={onClose} className="btn-secondary">
                            Cancel
                        </button>
                        <button type="submit" className="btn-primary">
                            Report Crisis
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CrisisForm;