import React from 'react';
import './App.css';
import Booking from './pages/Booking'
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Customer } from "./pages/Customer";
import { Staff } from "./pages/Staff"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigation Links */}
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/customer">Customer</Link>
                    <Link to="/staff">Staff</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/booking">Booking</Link>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} /> {/* This sets Home as the default page */}
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/booking" element={<Booking />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;