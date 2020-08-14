import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Landing from './Components/Landing';
import Card from './Components/Card';
import Category from './Components/Category';
import Numbers from './Components/Numbers';
import Correo from './Components/Correo';
import Card from './components/Card'
import GridCard from './components/GridCard';



function Home() {
    return (
        <>
        <Landing/>
        <Card />
        <GridCar />
        <Category/>
        <Numbers/>
        <Correo/> 
        </>
    )
}

export default withRouter(Home)
