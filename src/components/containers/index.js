import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from '../../Routes'
//UI 

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import Landing from './components/Landing';
import Category from './components/Category';
import Numbers from './components/Numbers';
import Correo from './components/Correo';
import Nuevacampaña from './components/Nuevacampaña';

function index() {
    return (
        <Router>
        <Navbar />
        <Landing/>
        <Routes />
        <Card />
        
        <Category/>
        <Numbers/>
        <Correo/>
        <Nuevacampaña/>
        <Footer />
        
        </Router>
    )
}

export default index
