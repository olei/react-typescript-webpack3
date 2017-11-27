import * as React from "react"
import * as ReactDOM from 'react-dom'
import { Toast } from 'antd-mobile'
import './reset.less'

let attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

import { aestNum, testObj } from 'COMPONENTS'
const a = 'a1'
const b: string = `${a}1`
console.log(testObj)

const target = document.getElementById('app')

class Root extends React.Component {
  componentWillMount () {
    Toast.loading('加载中...', 1)
  }
  render () {
    return (
      <div className="green">
        jzb-react-cli test34567
      </div>
    )
  }
}

ReactDOM.render(<Root/>, target)
