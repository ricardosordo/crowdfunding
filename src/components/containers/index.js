import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from '../../Routes'
//UI 

import Header from './components/Header';
import Footer from './components/Footer';


function index() {
    return (
        <Router>
        <Header />
        <Routes />
        <Footer />
        </Router>
    )
}

export default index
