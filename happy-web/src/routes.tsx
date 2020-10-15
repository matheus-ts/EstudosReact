import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Mapa from './Pages/Map';
import { Orfanatos } from './Pages/Orfanatos';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/map" component={Mapa} />
            <Route path="/orfanatos" component={Orfanatos} />
        </BrowserRouter>
    )
}


export default Routes;