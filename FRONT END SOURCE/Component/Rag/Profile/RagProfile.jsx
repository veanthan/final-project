import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ragProfile.css';

import image from '../../../assets/profile.jpg'
const RagProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8080/ecoconnect/login/details', {
                    params: { email: 'pavi@gmail.com' } // This line is required if you still want to use query params
                });
                setProfile(response.data);
            } catch (err) {
                setError('Please! join as eco connector');
                console.error('Error fetching profile:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    // Uncomment these lines if you want to handle loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (!profile) return <p>No profile data available.</p>;

    return (
        <>
            
            <div className="profile-container">
                <div className="profile-header">
                    <img src={image} alt="Profile" className="profile-picture" />
                </div>
                <div className="profile-content">
                    <h2>Personal Information</h2>
                    <div className="info-group">
                        <h3>Name: {profile.name}</h3>
                    </div>
                    <div className="info-group">
                        <h3>Email: {profile.email}</h3>
                    </div>
                    <div className="info-group">
                        <h3>Phone: {profile.phone}</h3>
                    </div>
                    <div className="info-group">
                        <h3>State: {profile.state}</h3>
                    </div>
                    <div className="info-group">
                        <h3>City: {profile.city}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RagProfile;
