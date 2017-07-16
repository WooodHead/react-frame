import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Popup } from 'antd-mobile'

import styles from '@/stylus/home.comment.enter'

import TopicPublicSelect from '@/components/TopicPublicSelect'

class HomeCommentEnter extends Component {
  constructor () {
    super()
    this.popUp = this.popUp.bind(this)
  }
  popUp () {
    const { history } = this.props
    Popup.show(
      <TopicPublicSelect history={history} />,
      {
        animationType: 'slide-up'
      }
    )
  }
  render () {
    const { className } = this.props
    return (
      <div onClick={this.popUp} className={className + ' ' + styles['comment']}>
        <span>说点什么吧~</span>
      </div>
    )
  }
}
export default withRouter(HomeCommentEnter)
