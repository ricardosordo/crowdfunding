import React from 'react';
import {Link, withRouter} from 'react-router-dom';



function Detail() {
    return (
        <div>
            <div className="container">
                <h2>Soy el detalle de cada campaña</h2>
            </div>
        </div>
    )
}

export default withRouter(Detail)