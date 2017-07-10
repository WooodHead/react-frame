import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { NavBar, Icon, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile'

import http, * as api from '@/util/api'

Component.prototype.Toast = Toast
Component.prototype.$api = api
class App extends Component {
  componentWillMount () {
  }
  render () {
    const { history } = this.props
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(App)
