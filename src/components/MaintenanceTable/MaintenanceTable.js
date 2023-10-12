import React from 'react';
import './MaintenanceTable.css';

function MaintenanceTable() {
    return (
        <div className="table-container">
            <table className="maintenance-details-table">
                <thead>
                <tr>
                    <th></th>
                    <th>UserId</th>
                    <th>RoomNumber</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>1L</td>
                    <td>1.1</td>
                    <td>The heater doesn't work</td>
                    <td>Pending</td>
                </tr>
                {/* 后面改 */}
                {Array.from({ length: 13 }).map((_, index) => (
                    <tr key={index + 2}>
                        <td>{index + 2}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="table-actions">
                <button className="update-btn">Update</button>
                <button className="edit-btn">Edit</button>
                <button className="upload-btn">Upload</button>

            </div>
        </div>
    );
}

export default MaintenanceTable;