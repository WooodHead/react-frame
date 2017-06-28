import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { NavBar, Icon, Toast } from 'antd-mobile'
import http, * as api from '@/util/api'

Component.prototype.Toast = Toast
Component.prototype.$api = api
class App extends Component {
  componentWillMount () {
    // this.Toast.info('This is a toast tips !!!', 1)
  }
  render () {
    return (
      <div className="app">
        <NavBar
          iconName={false}
          mode="light"
          leftContent={
            <div className="leftContent"><Icon key="1" type="left" /></div>
          }
          onLeftClick={() => console.log('onLeftClick')}
        >社区首页</NavBar>
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(App)
