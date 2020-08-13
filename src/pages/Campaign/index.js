import React from 'react';
import {Link, withRouter} from 'react-router-dom';



function Campaign() {
    return (
        <div>
            <div className="container">
                <h2>Soy el creador y editor de campaña</h2>
            </div>
        </div>
    )
}

export default withRouter(Campaign)