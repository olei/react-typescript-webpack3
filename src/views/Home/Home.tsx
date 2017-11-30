import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Action from '../../store/actions'

import './Home.less'

@connect(
  state => ({...state}),
  (dispatch: any) => bindActionCreators(Action, dispatch)
)

export default class HomeView extends React.Component<any, any> {

  constructor (props: any) {
    super(props)
    this.state = {
      value: '首页'
    }
  }

  componentWillMount () {
    const { name } = this.props
    console.log(this.props.global)
  }

  render () {
    return (
      <div>
        <Link to={'/about'} className="home-book-list">
          {this.state.value}
        </Link>
      </div>
    )
  }
}