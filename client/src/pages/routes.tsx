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
            <Route exact={true} path='/profile' component={Profile} />
            <Route exact={true} path='/:category' component={S_ListPage} />
            <Route exact={true} path='/:category/*/:businessId' component={S_DetailPage} />
        </Switch>
    )
}

export default Routes;