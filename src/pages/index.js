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

const TabPane = Tabs.TabPane
var load = require('bundle-loader?lazy!lib/mui/js/mui')

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
    console.log('will mount')
    const {dispatch} = this.props
    dispatch(actions.fetchTopicAllType({cb: function () {
      console.log('data responed')
      load(function (mui) {
        mui.init()
        mui('#navbar-scroll').scroll()
        mui('.home-slider').slider()
        mui('.m-s-w-2').scroll({
          indicators: false,
          deceleration: 0.0005,
          bounce: true
        })
      })
    }}))
  }
  componentDidMount () {
    $('.' + styles['home-tabs'] + ' > .am-tabs-content').scroll(function (e) {
      // resetTabsBarPosition()
    })
  }
  rennderTitleContent () {
    const { topicTypes } = this.props
    return (
      <div id="navbar-scroll" className="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div className="mui-scroll">
          {
            topicTypes.map((item, index) => {
              return (
                <a key={index} href={'#scrollWrapItem' + index} className={'mui-control-item ' + (index === 0 ? 'mui-active' : '')}>
                  {item.name}
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
  render () {
    const { topicTypes } = this.props
    return (
      <div className="layout">
        <div className="home-slider mui-slider mui-fullscreen">
          <Navbar
            titleContent={this.rennderTitleContent.bind(this)()}
            rightContent={<NavbarPerson />}
            titleClass="flex-2"
          />
          <div className="m-s-w-1 mui-slider-group">
            {
              topicTypes.map((item, index) => {
                return (
                  <div id={'scrollWrapItem' + index} className={'mui-slider-item mui-control-content ' + (index === 0 ? 'mui-active' : '')} key={index}>
                    <div className="mui-scroll-wrapper m-s-w-2">
                      <div className="mui-scroll">
                        <Stick />
                        <Topic typeid={item.id}/>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
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
