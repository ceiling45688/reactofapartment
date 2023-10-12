import React from 'react';
import './MaintenanceForm.css'

function MaintenanceForm () {
    return (
        <div className="maintenance-form">
            <h3>Maintenance Report</h3>
            <p>Report any issues related to your rooms, kitchen, or the common areas.</p>
            <form>
                <div className="form-group">
                    <label htmlFor="description1">Description:</label>
                    <textarea id="description1" name="description1"
                              placeholder="Please include your room number and damaged item details..."
                              required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MaintenanceForm;
