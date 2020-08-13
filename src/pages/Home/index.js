import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Card from './components/Card'


function Home() {
    return (
        <div>
            <div className="container">
                <h2>Soy la página principal</h2>
                <Card />
            </div>
        </div>
    )
}

export default withRouter(Home)
