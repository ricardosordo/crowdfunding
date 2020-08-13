import React from 'react';
import {Link, withRouter} from 'react-router-dom';



function Home() {
    return (
        <div>
            <div className="container">
                <h2>Hola Mundo</h2>
            </div>
        </div>
    )
}

export default withRouter(Home)
