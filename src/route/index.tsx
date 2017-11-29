import * as React from 'react'
// import { Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

// import Root from './Root'
import * as RoutesModule from './Root'
let routes = RoutesModule.routes;

export default class App extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    console.log(this.props.history)
  }

  render() {
    return (
      <div>
        <BrowserRouter children={ routes } />
      </div>
    )
  }
}