import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import { Distances, Mass, Currencies } from 'converter';

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <Route path='mass' component={Mass} />
                <Route path='distances' component={Distances} />
                <Route path='currencies' component={Currencies} />
            </Route>
        </Router>
    )
};

export default Routes;