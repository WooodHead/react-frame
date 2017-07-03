import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { NavBar, Icon, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import Header from '@/components/common/Header'
import http, * as api from '@/util/api'
import header from '@/stylus/header'
Component.prototype.Toast = Toast
Component.prototype.$api = api
class App extends Component {
  componentWillMount () {
    // this.Toast.info('This is a toast tips !!!', 1)
  }
  render () {
    const { history } = this.props
    return (
      <div className="app">
        <Header
          titleContent={<span ref="title">网利社区</span>}
          rightContent={<span ref="title">网利社区</span>}
          >
        </Header>
        <WhiteSpace size="xl"/>
        <WingBlank>
          <Button onClick={() => { history.push('/') }} type="primary" style={{marginRight: '10px'}} inline size="small">Home</Button>
          <Button onClick={() => { history.push('/list') }} type="primary" style={{marginRight: '10px'}} inline size="small">ListView</Button>
        </WingBlank>
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(App)
