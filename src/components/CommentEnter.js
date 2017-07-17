import React, { Component } from 'react'

import styles from '@/stylus/comment.enter'

export default class extends Component {
  render () {
    return (
      <div className={styles.view}>
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
