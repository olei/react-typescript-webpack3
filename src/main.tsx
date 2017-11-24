import * as React from "react"
import * as ReactDOM from 'react-dom'
import './reset.less'

const target = document.getElementById('app')

class Root extends React.Component {
  render () {
    return (
      <div className="green">
        jzb-react-cli test2
      </div>
    )
  }
}

ReactDOM.render(<Root/>, target)
