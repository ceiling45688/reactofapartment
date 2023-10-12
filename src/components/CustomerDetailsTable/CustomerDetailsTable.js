import React from 'react';
import './CustomerDetailsTable.css';

function CustomerDetailsTable() {
    return (
        <div className="table-container">
            <table className="customer-details-table">
                <thead>
                <tr>
                    <th></th>
                    <th>UserId</th>
                    <th>Email</th>
                    <th>RoomNumber</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>1L</td>
                    <td>123456@gmail.com</td>
                    <td>1.1</td>
                    <td>08/10/2023-08/10/2024</td>
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

export default CustomerDetailsTable;