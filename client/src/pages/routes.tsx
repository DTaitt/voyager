import * as React from 'react';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';

import Home from './Home'
import CDetailPage from './DetailPage'
import cListPage from './ListPage'

const Routes: React.StatelessComponent<{}> = () => {
    return(
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact={true} path='/restaurants' component={cListPage} />
                <Route exact={true} path='/restaurants/*/:restaurantId' component={CDetailPage} />
            </Switch>
        </Router>
    )
}

export default Routes;