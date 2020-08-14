import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from '../../Routes';

//UI Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function index() {
    return (
        <Router>
        <Navbar />
        <Routes />
        <Footer />
        </Router>
       
    )
}

export default index
