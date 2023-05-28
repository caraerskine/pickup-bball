import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/user';
import { BrowserRouter as Router } from 'react-router-dom'

function Wrap() {

    return (
        <Router>
            <UserProvider>
                <App />
            </UserProvider>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Wrap />);