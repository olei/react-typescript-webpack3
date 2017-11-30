import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Action from '../../store/actions'
import { IhomeAction } from '../../interface'

import './Home.less'

@connect(
  state => ({...state}),
  (dispatch: any) => bindActionCreators(Action, dispatch)
)

export default class HomeView extends React.Component<IhomeAction, any> {

  constructor (props: any) {
    super(props)
    this.state = {
      value: '首页'
    }
  }

  componentWillMount () {
    // this.props.homeAction('react-cli')
    console.log(this.props.home.siteInfo)
  }

  render () {
    return (
      <div>
        <Link to={'/about'} className="home-book-list">
          {this.state.value} - {this.props.home.name}
        </Link>
      </div>
    )
  }
}