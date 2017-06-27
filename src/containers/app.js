import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { NavBar, Icon, Toast, Button } from 'antd-mobile'

function showToast () {
  Toast.info('This is a toast tips !!!', 1)
}

Component.prototype.Toast = Toast

class App extends Component {
  componentWillMount () {
    // this.Toast.info('This is a toast tips !!!', 1)
  }
  render () {
    return (
      <div className="app">
        <NavBar leftContent="back" style={{ height: '1rem', fontSize: '.2rem' }}
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >社区首页</NavBar>
        <Button onClick={showToast}>Text toast</Button>
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(App)
