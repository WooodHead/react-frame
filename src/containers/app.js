import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { NavBar, Icon, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile'
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
        <NavBar
          iconName={false}
          mode="light"
          leftContent={
            <div className="leftContent"><Icon key="1" type="left" /></div>
          }
          onLeftClick={() => console.log('onLeftClick')}
        >社区首页</NavBar>
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
