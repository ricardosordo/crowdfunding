import React from 'react';
import {withRouter} from 'react-router-dom';
import Landing from '../Home/components/Landing';
import Category from '../Home/components/Category';
import Numbers from '../Home/components/Numbers';
import Correo from '../Home/components/Correo';
import GridCard from '../Home/components/GridCard';



function Home() {
    return (
        <>
        <Landing/>
        <Category />
        <GridCard />
        <Numbers />
        <Correo />
        </>
    )
}

export default withRouter(Home)
