import logo from './logo.svg';
import React from 'react';
import './App.css';
import Booking from './pages/Booking'
import {Contact} from "./pages/Contact";
import {Home} from "./pages/Home";

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                    {/*Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                    {/*className="App-link"*/}
                    {/*href="https://reactjs.org"*/}
                    {/*target="_blank"*/}
                    {/*rel="noopener noreferrer"*/}
                {/*>*/}
                    {/*Learn React*/}
                {/*</a>*/}
            {/*</header>*/}

            <Home/>
            {/*<Contact/>*/}
            {/*<Booking />*/}
        </div>
    );
}

export default App;
