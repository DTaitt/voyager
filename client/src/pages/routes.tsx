import * as React from 'react';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';

import Home from './Home'
import DetailPage from './DetailPage'
import cListPage from './ListPage'

const Routes: React.StatelessComponent<{}> = () => {
    return(
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact={true} path='/detail' component={DetailPage} />
                <Route exact={true} path='/list' component={cListPage} />
            </Switch>
        </Router>
    )
}

export default Routes;