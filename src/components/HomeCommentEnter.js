import React, { Component } from 'react'

import styles from '@/stylus/home-commententer'
console.log(styles)

class HomeCommentEnter extends Component {
  render () {
    return (
      <div className={styles['comment']}>
        <span>说点什么吧~</span>
      </div>
    )
  }
}
export default HomeCommentEnter
