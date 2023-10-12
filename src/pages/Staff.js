import React, {useState} from 'react'
import './Staff.css'
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import CustomerDetailsTable from "../components/CustomerDetailsTable/CustomerDetailsTable"
import MaintenanceTable from "../components/MaintenanceTable/MaintenanceTable"


export const Staff = () => {
    const [screenContent, setScreenContent] = useState('default');

    const handleButtonClick = (type) => {
        // console.log(`${type} button clicked!`);
        setScreenContent(type)
    }

    const renderScreenContent = () =>{
        switch (screenContent) {
            case 'maintenance':
                return (
                    <MaintenanceTable/>
                );
            case 'details':
                return (
                    <CustomerDetailsTable/>
                );

            default:
                return (
                    <p>
                        Welcome, <br/>
                        The Cabbage staff choice your button
                    </p>
                );
        }
    }
    return (
        <div className="staff">
            <NavBar currentPage="Home"/>

            <div className="staff_content">

                <div className= "func_buttons">
                    <div className="details" onClick={() => handleButtonClick('details')}>
                        <h3>Customer Details</h3>
                        <p>View, Search and Edit customer details</p>
                    </div>

                    <div className="maintenance" onClick={() => handleButtonClick('maintenance')}>
                        <h3>Maintenance</h3>
                        <p>View reported maintenance and upgrade  status
                        </p>
                    </div>
                </div>

                <div className="staff_screen">{
                    renderScreenContent()
                }
                </div>

            </div>

            <Footer/>
        </div>
    );
}