import React, { useState } from 'react';
import './PersonalDetails.css'

function PersonalDetails() {
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details); // 这里您可以处理表单提交的逻辑，例如发送到服务器
    };

    return (
        <div className="personal-details">
            <h3>Personal Details</h3>
            <p>Edit your personal details below:</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={details.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={details.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value={details.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label for="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} required />
                </div>
                <button type="submit">Update Details</button>
            </form>
        </div>
    );
}

export default PersonalDetails;
