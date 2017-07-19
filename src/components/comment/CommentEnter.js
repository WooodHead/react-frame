import React, { Component } from 'react'
import { Popup } from 'antd-mobile'

import styles from '@/stylus/comment.enter'

import PublishComment from '@/components/PublishComment'

export default class extends Component {
  toPublish () {
    Popup.show(
      <PublishComment id={this.props.id} />,
      {
        animationType: 'slide-up'
      }
    )
  }
  scrollCommentTop () {
    $('.scroll-wrap').animate({
      scrollTop: $('#comment').offset().top - 90
    }, 100)
  }
  render () {
    return (
      <div className={styles.view}>
        <span className={styles.content} onClick={this.toPublish.bind(this)}>说点什么吧～</span>
        <div className={styles.right}>
          <div onClick={this.scrollCommentTop.bind(this)} className={styles.comment}>
            <span>1.8k</span>
          </div>
          <div className={styles.collect}>
            <span>888</span>
          </div>
        </div>
      </div>
    )
  }
}
