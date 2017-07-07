import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { ActivityIndicator, Tabs } from 'antd-mobile'
import { createForm } from 'rc-form'
import * as actions from '@/actions/topic'

import Navbar from '@/components/common/Navbar'
import NavbarMessage from '@/components/common/icons/NavbarMessage'
import NavbarPerson from '@/components/common/icons/NavbarPerson'
import Stick from '@/containers/Stick'
import Topic from '@/containers/Topic'
import HomeCommentEnter from '@/components/HomeCommentEnter'

import styles from '@/stylus/home'

const Hammer = require('lib/hammer.min')
const TabPane = Tabs.TabPane

function callback (key) {
  console.log('onChange', key)
}
function resetTabsBarPosition (obj) {
  var el = $('.' + styles['home-tabs'] + ' > .am-tabs-content')
  var navbarHeight = $('.' + styles['home-tabs']).children('.am-tabs-bar').height()
  console.log(navbarHeight)
  var tabbarWidth = ($(window).width() - 40) + 'px'

  let tabsBar = el.children('.am-tabs-tabpane-active').find('.am-tabs-bar')
  let tabsContent = el.children('.am-tabs-tabpane-active').find('.am-tabs-content')
  if (el.scrollTop() > (tabsBar[0].offsetTop - navbarHeight)) {
    // 浮动tabsbar
    tabsBar.css({'position': 'fixed', width: tabbarWidth, top: navbarHeight + 'px', 'z-index': '999'})
    tabsContent.css({'margin-top': tabsBar.height() + 'px'})
  }

  if (el.scrollTop() <= (tabsContent[0].offsetTop - navbarHeight - tabsBar.height())) {
    // 回归tabsbar
    tabsBar.css({'position': 'relative', 'top': '0px'})
    tabsContent.css({'margin-top': '0'})
  }
}
function handleTabClick (key) {
  setTimeout(function () {
    resetTabsBarPosition()
  }, 100)
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
      loading: false
    }
  }
  componentWillMount () {
    const {dispatch} = this.props
    dispatch(actions.fetchTopicAllType())
  }
  componentDidMount () {
    $('.' + styles['home-tabs'] + ' > .am-tabs-content').scroll(function (e) {
      resetTabsBarPosition()
    })
  }
  render () {
    const { topicTypes } = this.props
    console.log(topicTypes)
    return (
      <div className="layout">
        <div className={styles['goback']}></div>
        <div className={styles['navbar-right']}>
          <NavbarPerson style={{marginRight: '32px'}}/>
        </div>
        <Tabs swipeable={false} animated={false} speed={1} destroyInactiveTabPane={true} className={styles['home-tabs']} defaultActiveKey="1" onChange={callback} pageSize={3} onTabClick={handleTabClick}>
          {
            topicTypes.map((item, index) => {
              return (
                <TabPane tab={`${item.name}`} key={index}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Stick />
                    <Topic typeid={item.id}/>
                  </div>
                </TabPane>
              )
            })
          }
        </Tabs>
        {/* <HomeCommentEnter /> */}
      </div>
    )
  }
}

function mapStateToProps ({topic}) {
  const { topicTypes } = topic
  return {
    topicTypes
  }
}

export default withRouter(connect(mapStateToProps)(Index))
