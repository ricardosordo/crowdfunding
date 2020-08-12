import React from 'react';
import Router from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from '../../Routes/index';

function index() {
    return (
        <div>
        <Header />
        <Routes />
        <Footer />
        </div>
    )
}

export default index
