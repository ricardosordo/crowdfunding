import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Category from '../Home/components/Category';
import GridCard from '../Home/components/GridCard';
import Correo from '../Home/components/Correo';



function Explore() {
    return (
        <>
        <br/>
        <Category />
        <GridCard />
        </>
    )
}
export default withRouter(Explore)