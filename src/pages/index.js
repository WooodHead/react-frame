import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { List, InputItem, TextareaItem, Button, WhiteSpace, WingBlank, ActivityIndicator } from 'antd-mobile'
import { createForm } from 'rc-form'

import Navbar from '@/components/common/Navbar'
import NavbarMessage from '@/components/common/icons/NavbarMessage'
import NavbarPerson from '@/components/common/icons/NavbarPerson'
import Stick from '@/containers/Stick'
import Topic from '@/containers/Topic'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      content: '',
      loading: false
    }
  }
  componentWillMount () {
  }
  render () {
    return (
      <div className="layout">
        <Navbar
          titleContent={<span ref="title">网利社区</span>}
          rightContent={[<NavbarMessage style={{marginRight: '40px'}} key="r1" />, <NavbarPerson key="r2" />]}
          >
        </Navbar>
        <div className="scroll-wrap">
          <Stick />
          <Topic />
          <ActivityIndicator toast text="正在加载" animating={this.state.loading}/>
        </div>
      </div>
    )
  }
}
export default withRouter(Index)
