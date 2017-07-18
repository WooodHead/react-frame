import React, { Component } from 'react'
import { Popup } from 'antd-mobile'

import styles from '@/stylus/comment.enter'

import PublishComment from '@/components/PublishComment'

export default class extends Component {
  toPublish () {
    Popup.show(
      <PublishComment />,
      {
        animationType: 'slide-up'
      }
    )
  }
  render () {
    return (
      <div className={styles.view} onClick={this.toPublish}>
        <span className={styles.content}>说点什么吧～</span>
        <div className={styles.right}>
          <div className={styles.comment}>
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
