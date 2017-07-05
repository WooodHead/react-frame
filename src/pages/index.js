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
class Index extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      content: '',
      loading: false
    }
  }
  componentDidMount () {
    $('.' + styles['home-tabs'] + ' .am-tabs-tabpane').map(function (index, el) {
      $(el).scroll(function (e) {
        console.log($(el).scrollTop(), $(el).find('.am-tabs-content')[0].offsetTop)
        if ($(el).scrollTop() > $(el).find('.am-tabs-bar')[0].offsetTop) {
          // $(el).find('.am-tabs-bar').css({'position': 'fixed', top: '200px', 'z-index': '999'})
        }
        if ($(el).scrollTop() <= $(el).find('.am-tabs-content')[0].offsetTop) {
          console.log('remove')
          // $(el).find('.am-tabs-bar').css({'position': 'relative', 'top': '0px'})
        }
      })
    })
  }
  render () {
    return (
      <div className="layout">
        <div className={styles['goback']}></div>
        <div className={styles['navbar-right']}>
          <NavbarPerson style={{marginRight: '32px'}}/>
        </div>
        <Tabs swipeable={true} speed={1} destroyInactiveTabPane={false} hammerOptions={[{event: 'pan', threshold: 200}]} className={styles['home-tabs']} defaultActiveKey="1" onChange={callback} pageSize={3} onTabClick={handleTabClick}>
          {makeMultiTabPane(11)}
        </Tabs>
      </div>
    )
  }
}
export default withRouter(Index)
