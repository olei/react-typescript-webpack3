import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeView from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'

export default class Root extends React.Component<any> {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomeView}></Route>
          <Route path="/about" component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}