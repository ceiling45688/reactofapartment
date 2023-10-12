import React, {useState} from 'react'
import './Customer.css'
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import InductionPageContent from "../components/InductionPageContent/InductionPageContent"
import MaintenanceForm from "../components/MaintenanceForm/MaintenanceForm"
import PersonalDetails from "../components/PersonalDetails/PersonalDetails"

export const Customer = () => {
    const [screenContent, setScreenContent] = useState('default');

    const handleButtonClick = (type) => {
        // console.log(`${type} button clicked!`);
        setScreenContent(type)
    }

    const renderScreenContent = () =>{
        switch (screenContent) {
            case 'induction':
                return (
                  // multi-pages
                    <InductionPageContent/>
                );
            case 'details':
                return (
                    <PersonalDetails/>
                );
            case 'maintenance':
                return (
                    <MaintenanceForm/>

                );
            default:
                return (
                    <p>
                        Welcome to the CabbageApart Portal, we're happy to see you again.<br />
                        <br />
                        We want to make sure your stay is as enjoyable as possible. On this portal you will be able to:
                        <br />
                        ⚫ Edit your personal details
                        <br />
                        ⚫ Pay for your rent or any other outstanding charge
                        <br />
                        For any other questions, we are always here to help.<br />
                        <br />
                        Enjoy your stay!
                        <br />
                        The Cabbage
                    </p>
                );
        }
    }
    return (
      <div className="customer">
          <NavBar currentPage="Home"/>

          <div className="customer_content">

              <div className="customer_div">
                  <h2>Home</h2>
                  <div className="customer_screen">
                      {renderScreenContent()}
                  </div>

                  <div className= "func_buttons">
                      <div className="induction" onClick={() => handleButtonClick('induction')}>
                          <h3>Online Induction</h3>
                          <p>Complete your induction and book your check-in slot</p>
                      </div>

                      <div className="details" onClick={() => handleButtonClick('details')}>
                          <h3>Personal Details</h3>
                          <p>Edit your personal details</p>
                      </div>

                      <div className="maintenance" onClick={() => handleButtonClick('maintenance')}>
                          <h3>Maintenance</h3>
                          <p>report anything that is not functioning in your rooms,
                              <br/> kitchen or the common areas.
                          </p>
                      </div>
                  </div>
              </div>

          </div>

          <Footer/>
      </div>
    );
}