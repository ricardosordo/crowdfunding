import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Landing from './Components/Landing';
import Card from './Components/Card';
import Category from './Components/Category';
import Numbers from './Components/Numbers';
import Correo from './Components/Correo';


function Home() {
    return (
        <>
        <Landing/>
        <Card />
        <Category/>
        <Numbers/>
        <Correo/> 
        </>
    )
}

export default withRouter(Home)
