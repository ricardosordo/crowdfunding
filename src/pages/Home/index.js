import React from 'react';
import {Link, withRouter} from 'react-router-dom';



function Home() {
    return (
        <div>
            <div className="container">
                <h2>Soy la página principal</h2>
            </div>
        </div>
    )
}

export default withRouter(Home)
