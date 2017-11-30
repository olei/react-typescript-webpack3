import * as React from 'react'
// BrowserRouter h5 histore 路由
import { BrowserRouter, HashRouter, Switch, Route, Router as Rt } from 'react-router-dom'

export interface RouterProps {
  history: any
}

import HomeView from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'

const routes = <Switch>
  <Route exact path="/" component={HomeView}></Route>
  <Route path="/about" component={NotFound}></Route>
</Switch>

export default class Router extends React.Component<RouterProps, any> {
  constructor (props: any) {
    super(props)
  }

  // render () {
  //   return (
  //     <div>
  //       <Router history={history}>
  //         <Route exact path="/" component={HomeView}></Route>
  //         <Route path="/about" component={NotFound}></Route>
  //       </Router>
  //     </div>
  //   )
  // }
  render() {
    return (
      <BrowserRouter children={ routes } />
    )
  }

}