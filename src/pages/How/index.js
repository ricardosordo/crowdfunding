import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import Pasos from '../How/Components/Pasos'



function How() {
    return (
        <div>
            <div className="container">
            
                <Pasos/>
               
            </div>
        </div>
    )
}

export default withRouter(How)