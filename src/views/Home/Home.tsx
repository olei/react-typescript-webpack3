import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/action'

import './Home.less'

@connect(
  state => ({...state}),
  (dispatch: any) => bindActionCreators(Action, dispatch)
)

export default class HomeView extends React.Component<any, any> {

  constructor (props: any) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render () {
    return (
      <div>
        首页
      </div>
    )
  }
}