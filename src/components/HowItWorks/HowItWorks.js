import React from "react";
import './HowItWorks.css'
import apartment from  "../../assets/images/apartment.svg"
import computer from "../../assets/images/process_computer.svg"
import list from "../../assets/images/process_list.svg"

export const HowItWorks = () =>{
    return (
        <div className="how-it-works-container">

            <h2>How It Works</h2>

            <div className="process">
                <div className="step">
                    <img src={list} alt="Mask group" className="icon" />
                    <div className="step-title">
                        <h3>Find A Listing</h3>
                        <p>
                            Make a choice of the type of apartment
                            <br />
                            and qualities that appeal to your interest.
                            <br/>
                        </p>
                    </div>
                </div>
                <div className="step">
                    <img src={computer} alt="Image" className="icon" />
                    <div className="step-title">
                        <h3>Select and Book</h3>
                        <p>
                            Make payments, get receipt, and all other
                            <br />important documents, set your move-in date.
                        </p>
                    </div>
                </div>
                <div className="step">
                    <img src={apartment} alt="Mask group 2" className="icon" />
                    <div className="step-title">
                        <h3>Move in!</h3>
                        <p>
                            Complete your induction and book your check-in slot,
                            <br />then move in!
                            <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}