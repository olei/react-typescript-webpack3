import * as React from 'react'
// import { ConnectedRouter } from 'react-router-redux'

import { Router } from 'react-router-dom'

// import Root from './Root'
const Root: any = require('/Root')

export default class App extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    console.log(history)
  }

  render() {
    const {
      history
    } = this.props

    return (
      <Router history={history}>
        <Root />
      </Router>
    )
  }

}