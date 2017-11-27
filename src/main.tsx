import * as React from "react"
import * as ReactDOM from 'react-dom'
import './reset.less'

let attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

import { aestNum, testObj } from 'COMPONENTS'
const a = 'a1'
const b = `${a}1`
console.log(testObj)

const target = document.getElementById('app')

class Root extends React.Component {
  render () {
    if (a) console.log(1)
    return (
      <div className="green">
        jzb-react-cli test34567
      </div>
    )
  }
}

ReactDOM.render(<Root/>, target)
