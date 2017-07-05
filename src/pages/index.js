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

const TabPane = Tabs.TabPane
const makeTabPane = key => (
  <TabPane tab={`选项${key}`} key={key}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="scroll-wrap">
        <Stick />
        <Topic />
      </div>
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
        <div className={styles['goback']}></div>
        <div className={styles['navbar-right']}>
          <NavbarPerson />
        </div>
        <Tabs className={styles['home-tabs']} defaultActiveKey="1" onChange={callback} pageSize={4} onTabClick={handleTabClick}>
          {makeMultiTabPane(11)}
        </Tabs>
      </div>
    )
  }
}
export default withRouter(Index)
