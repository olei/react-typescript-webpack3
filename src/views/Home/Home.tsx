import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Action from '../../store/actions'
import { IhomeAction, Ihome } from '../../interface'

import './Home.less'

@connect(
  state => ({...state}),
  (dispatch: any) => bindActionCreators(Action, dispatch)
)

export default class HomeView extends React.Component<IhomeAction, any> {

  constructor (props: IhomeAction) {
    super(props)
    this.state = {
      value: '首页'
    }
  }

  componentWillMount () {
    this.props.homeAction('jzb-react-cli')
    this.props.getData()
  }

  render () {
    return (
      <div>
        <Link to={'/about'} className="home-book-list">
          {this.state.value} - {this.props.home.siteInfo}
        </Link>
      </div>
    )
  }
}