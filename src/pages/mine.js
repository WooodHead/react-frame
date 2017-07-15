import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Navbar from '@/components/common/Navbar'
import NoLogin from '@/containers/mine/NoLogin'
import MineMenu from '@/containers/mine/MineMenu'
class Mine extends Component {
  render () {
    return (
      <div className="layout">
        <Navbar
          titleContent="我的"
          />
        <div className="scroll-wrap bg-white">
          <NoLogin />
          <MineMenu />
        </div>
      </div>
    )
  }
}
export default withRouter(Mine)
