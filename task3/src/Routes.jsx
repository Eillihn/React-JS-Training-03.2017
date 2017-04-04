import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { App, Mass, Distances, Currencies, LoggedWrapper } from 'components';
import { Log } from 'containers';

const Routes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='mass' component={() => <LoggedWrapper><Mass /></LoggedWrapper>} />
            <Route path='distances' component={() => <LoggedWrapper><Distances /></LoggedWrapper>} />
            <Route path='currencies' component={() => <LoggedWrapper><Currencies /></LoggedWrapper>} />
            <Route path='log' component={Log} />
        </Route>
    </Router>
);

export default Routes;