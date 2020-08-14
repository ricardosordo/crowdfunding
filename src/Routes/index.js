import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

//general routes
import Home from "../pages/Home";
import Explore from '../pages/Explore';
import Detail from '../pages/Detail';
import Campaign from '../pages/Campaign';
import How from '../pages/How';


function Routes() {
    return (
        <Container fixed>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/explorar" exact component={Explore} />
            <Route path="/campaña" exact component={Campaign} />
            <Route path="/detalle" exact component={Detail} />
            <Route path="/comofunciona" exact component={How} />
        </Switch>
        </Container>
    )
}

export default Routes
