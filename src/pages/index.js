import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { ActivityIndicator, Tabs } from 'antd-mobile'
import { createForm } from 'rc-form'

import Navbar from '@/components/common/Navbar'
import NavbarMessage from '@/components/common/icons/NavbarMessage'
import NavbarPerson from '@/components/common/icons/NavbarPerson'
import Stick from '@/containers/Stick'
import Topic from '@/containers/Topic'

import styles from '@/stylus/home'

const Hammer = require('lib/hammer.min')
const TabPane = Tabs.TabPane

const makeTabPane = key => (
  <TabPane tab={`选项${key}`} key={key}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Stick />
      <Topic />
    </div>
  </TabPane>
)

const makeMultiTabPane = (count) => {
  const result = []
  for (let i = 0; i <= count; i++) {
    result.push(makeTabPane(i))
  }
  return result
}
function callback (key) {
  console.log('onChange', key)
}
function handleTabClick (key) {
  console.log('onTabClick', key)
}
function handlePan () {
  console.log('pan')
}
class Index extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      content: '',
      loading: false,
      swipeable: true
    }
  }
  componentDidMount () {
  }
  render () {
    const hammerOptions = {
      recognizers: {
        pan: {
          pointers: 1,
          threshold: 10,
          velocity: 0.3
        }
      }
    }
    return (
      <div className="layout">
        <div className={styles['goback']}></div>
        <div className={styles['navbar-right']}>
          <NavbarPerson style={{marginRight: '32px'}}/>
        </div>
        <Tabs swipeable={this.state.swipeable} hammerOptions={hammerOptions} animated={true} speed={1} destroyInactiveTabPane={false} className={styles['home-tabs']} defaultActiveKey="1" onChange={callback} pageSize={3} onTabClick={handleTabClick}>
          {makeMultiTabPane(11)}
        </Tabs>
      </div>
    )
  }
}
export default withRouter(Index)
