import React from 'react';
import './InductionPageContent.css'

function InductionPageContent() {
    return (
        <div className="induction-page">
            <div className="induction-intro">
                <p>Online Induction</p>
                <p>Welcome to our apartment complex! We're excited to have you here. Before you settle in, there are a few things you need to know to make your stay comfortable and safe.</p>
                <p>Our apartments are equipped with state-of-the-art amenities, 24/7 security, and a friendly community. Make sure to familiarize yourself with the emergency exits, gym timings, and community guidelines.</p>
                <p>If you have any questions, our front desk is always ready to assist you. Let's get started with your induction process!</p>
            </div>

            <div className="induction-form">
                <h3>Check-in Details</h3>
                <form>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label for="checkin">Check-in Date:</label>
                        <input type="date" id="checkin" name="checkin" required />
                    </div>
                    <div className="form-group">
                        <label for="room">Room Number:</label>
                        <input type="text" id="room" name="room" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default InductionPageContent;