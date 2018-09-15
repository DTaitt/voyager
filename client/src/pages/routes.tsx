import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home'
import S_DetailPage from './DetailPage'
import S_ListPage from './ListPage'
import Profile from './Profile'

const Routes:React.SFC<{}> = () => {
    return(
        <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/restaurants' component={S_ListPage} />
            <Route exact={true} path='/restaurants/*/:restaurantId' component={S_DetailPage} />
            <Route exact={true} path='/profile' component={Profile} />
        </Switch>
    )
}

export default Routes;