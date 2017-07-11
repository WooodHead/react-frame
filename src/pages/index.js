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
    var that = this
    // 监听导航点击，左右滑动事件进行导航选中位置重置
    mui('#navbar-scroll').on('tap', '.mui-control-item', function () {
      var el = this
      that.resetNavScrollPosition(el)
    })
    document.querySelector('.home-slider').addEventListener('slide', function (event) {
      var num = event.detail.slideNumber
      var el = $('#navbar-scroll').find('.mui-control-item').eq(num)[0]
      that.resetNavScrollPosition(el)
    })
  }
  // 航选中位置重置
  resetNavScrollPosition (el) {
    var lastEl = $(el).parent().children('.mui-control-item:last-child')
    var totalW = lastEl[0].offsetLeft + lastEl[0].clientWidth
    var offsetLeft = $(el)[0].offsetLeft
    var half = $('#navbar-scroll').width() / 2 // 导航的一半宽
    var x = 0
    var nextW = $(el)[0].nextSibling ? $(el)[0].nextSibling : 0
    if ($(el)[0].offsetLeft + $(el)[0].clientWidth < half) {
      // offset + clientWidth 达不到 当前容器一半 不做任何处理
    } else if (totalW - offsetLeft < half) {
      // 当前元素到最后元素的宽不足容器一半 不做任何处理
    } else {
      x = $(el)[0].offsetLeft - half + $(el)[0].clientWidth / 2
      setTimeout(() => {
        mui('#navbar-scroll').scroll().scrollTo(-x, 0, 0)
      }, 0)
    }
  }
  initPullRefresh (id) {
    var that = this
    mui('#refreshContainer_' + id).pullRefresh({
      down: {
        indicators: false,
        style: 'circle', // 必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
        color: '#2BD009', // 可选，默认“#2BD009” 下拉刷新控件颜色
        height: 100, // 可选,默认50.触发下拉刷新拖动距离,
        auto: false, // 可选,默认false.首次加载自动上拉刷新一次
        callback: function () {
          setTimeout(() => {
            this.endPulldownToRefresh(true)
          }, 1000)
        } // 必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
      },
      up: {
        indicators: false,
        style: 'circle',
        height: 50, // 可选.默认50.触发上拉加载拖动距离
        auto: false, // 可选,默认false.自动上拉加载一次
        contentrefresh: '正在加载...', // 可选，正在加载状态时，上拉加载控件上显示的标题内容
        contentnomore: '没有更多数据了', // 可选，请求完毕若没有更多数据时显示的提醒内容；
        callback: function () {
          console.log(that.props)
          setTimeout(() => {
            this.endPullupToRefresh(false)
          }, 1000)
        } // 必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
      }
    })
  }

  componentDidUpdate () {
    var that = this
    mui('#navbar-scroll').scroll({
      startX: 50,
      snapX: 0.5
    })
    mui('.home-slider').slider()
    mui('.m-s-w-2').scroll({
      indicators: false,
      deceleration: 0.0005,
      bounce: true
    })
    const { topicTypes } = that.props
    topicTypes.map((item, index) => {
      that.initPullRefresh(item.id)
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
    const { topicTypes, selectedTypeId } = this.props
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
                  <div id={'scrollWrapItem' + index} className={'mui-slider-item mui-control-content ' + (selectedTypeId === item.id ? 'mui-active' : '')} key={index}>
                    <div id={'refreshContainer_' + item.id} className="mui-content mui-scroll-wrapper layout-conent">
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
        <HomeCommentEnter className={styles['comment-enter']} />
      </div>
    )
  }
}

function mapStateToProps ({topic}) {
  const { topicTypes, selectedTypeId } = topic
  return {
    topicTypes,
    selectedTypeId
  }
}

export default withRouter(connect(mapStateToProps)(Index))
