import * as React from 'react';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';

import Home from './Home'
import S_DetailPage from './DetailPage'
import S_ListPage from './ListPage'

const Routes: React.StatelessComponent<{}> = () => {
    return(
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact={true} path='/restaurants' component={S_ListPage} />
                <Route exact={true} path='/restaurants/*/:restaurantId' component={S_DetailPage} />
            </Switch>
        </Router>
    )
}

export default Routes;