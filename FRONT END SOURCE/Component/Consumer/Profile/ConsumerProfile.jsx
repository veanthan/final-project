import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './consumerProfile.css';
import image from '../../../assets/profile.jpg'

const ConsumerProfile = () => {
    // const [profile, setProfile] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8080/ecoconnect/getRags', {
    //                 params: { email: 'nambu@gmail.com' } // This line is required if you still want to use query params
    //             });
    //             console.log(response);
                
    //             // setProfile(response.data[0]);
    //         } catch (err) {
    //             setError('Please! join as eco connector');
    //             console.error('Error fetching profile:', err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProfile();
    // }, []);

    // // Uncomment these lines if you want to handle loading and error states
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;

    // if (!profile) return <p>No profile data available.</p>;

    return (
        <>
            {/* <Navbar /> */}
            <div className="profile-container">
                <div className="profile-header">
                    <img src={image} alt="Profile" className="profile-picture" />
                </div>
                <div className="profile-content">
                    <h2>Personal Information</h2>
                    <div className="info-group">
                        <h3>Name: nambu</h3>
                    </div>
                    <div className="info-group">
                        <h3>Email: nambu@gmail.com</h3>
                    </div>
                    <div className="info-group">
                        <h3>Phone: 7654748494</h3>
                    </div>
                    <div className="info-group">
                        <h3>State: Tamilnadu</h3>
                    </div>
                    <div className="info-group">
                        <h3>City: Rameswaram</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConsumerProfile;
