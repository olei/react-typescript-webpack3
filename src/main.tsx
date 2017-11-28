import * as React from "react"
import * as ReactDOM from 'react-dom'
import { Toast } from 'antd-mobile'
import './reset.less'

let attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

const target = document.getElementById('app')

class Root extends React.Component {
  render () {
    return (
      <div className="green">
        jzb-react-cli12345678
      </div>
    )
  }
}

ReactDOM.render(<Root/>, target)
