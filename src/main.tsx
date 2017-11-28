import * as React from "react"
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'
// import { createHistory } from 'history'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import './assets/less/reset.less'
import './assets/less/index.less'

let attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

class Root extends React.Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <div>jzb-react-cli</div>
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('app'))
