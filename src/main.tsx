import * as React from "react"
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppRoute from './route'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import './assets/less/reset.less'
import './assets/less/index.less'

let attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

const target: HTMLElement = document.getElementById('app')

class Root extends React.Component {
  render () {
    return (
      <Provider store={store as any}>
        <AppRoute history={history} />
      </Provider>
    )
  }
}

ReactDOM.render(<Root/>, target)
