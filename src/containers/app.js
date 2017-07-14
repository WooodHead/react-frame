import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { NavBar, Icon, Toast, Button, WhiteSpace, WingBlank, ActivityIndicator } from 'antd-mobile'

import Alert from '@/plugins/alert'
import http, * as api from '@/util/api'

Component.prototype.Toast = Toast
Component.prototype.$api = api
Component.prototype.Alert = Alert
class App extends Component {
  componentWillMount () {
  }
  render () {
    const { loading } = this.props
    return (
      <div className="app">
        {this.props.children}
        <ActivityIndicator
          toast
          text="加载中..."
          animating={loading}
        />
      </div>
    )
  }
}
export default withRouter(connect(({common}) => {
  return common
})(App))
