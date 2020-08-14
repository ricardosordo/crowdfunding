import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Category from '../Home/components/Category';
import GridCard from '../Home/components/GridCard';
import Correo from '../Home/components/Correo';



function Explore() {
    return (
        <>
        <div>
            <h2>Encuentra y apoya la causa que más te mueva</h2>
        </div>
        <Category />
        <GridCard />
        <Correo />
        </>
    )
}
export default withRouter(Explore)