import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeView from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'

// export default class Root extends React.Component<any> {
//   render() {
//     return (
//       <Switch>
//         <Route path="/" component={HomeView}></Route>
//         <Route path="/about" component={NotFound}></Route>
//       </Switch>
//     )
//   }
// }

export const routes = <Switch>
        <Route path="/" component={HomeView}></Route>
        <Route path="/about" component={NotFound}></Route>
      </Switch>