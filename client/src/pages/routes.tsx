import * as React from 'react';
import { Route, Switch,  HashRouter } from 'react-router-dom';
import Home from './Home'
import DetailPage from './DetailPage'
import ListPage from './ListPage'
// export default function Routes() {
//     return(
//         <Router>
//             <Switch>
//                 <Route exact={true} path='/' component={Home} />
//             </Switch>
//         </Router>
//     )
// }

// const Routes: React.StatelessComponent<{}> = () => {
//     return(
//         <Router>
//             <Switch>
//                 <Route exact={true} path='/' component={Home} />
//             </Switch>
//         </Router>
//     )
// }


const Routes: React.StatelessComponent<{}> = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact={true} path='/detail' component={DetailPage} />
                <Route exact={true} path='/list' component={ListPage} />
            </Switch>
        </HashRouter>
    )
}

export default Routes