import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Landing from '../Home/components/Landing';
import Card from '../Home/components/Card';
import Category from '../Home/components/Category';
import Numbers from '../Home/components/Numbers';
import Correo from '../Home/components/Correo';
import GridCard from '../Home/components/GridCard';
import Campaign from '../Home/components/Campaign';


function Home() {
    return (
        <div className="Cajalanding">
        <Landing/>
        <Category />
        <GridCard />
        <Numbers />
        <Campaign/>
        
        </div>
    )
}

export default withRouter(Home)
