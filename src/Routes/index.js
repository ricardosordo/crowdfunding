import React from 'react'
import { Switch, Route } from 'react-router-dom';

//general routes
import Home from "../pages/Home"


function Routes() {
    return (
        <div>
        <main className="container">
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
        </main>
        </div>
    )
}

export default Routes
