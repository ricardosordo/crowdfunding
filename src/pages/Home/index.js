import React from 'react';
import {withRouter} from 'react-router-dom';
import Landing from '../Home/components/Landing';
import Category from '../Home/components/Category';
import Numbers from '../Home/components/Numbers';
import GridCard from '../Home/components/GridCard';
import './Home.css'


function Home() {
    return (
        <>
        <Landing/>
        <Category />
        <GridCard />
        <Numbers />
        </>
    )
}

export default withRouter(Home)
