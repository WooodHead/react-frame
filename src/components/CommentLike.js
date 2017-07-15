/**
 * 评论点赞
 */
import React, { Component } from 'react'

import styles from '@/stylus/comment-like'

class CommentLike extends Component {
  constructor () {
    super()
    this.state = {
      clicked: false
    }
    this.toClick = this.toClick.bind(this)
  }
  toClick () {
    this.setState({
      clicked: true
    })
  }
  render () {
    return (
      <div onClick={this.toClick} className={styles['like-area'] + ' ' + (this.state.clicked ? styles['clicked'] : styles['can-click'])}>
        <span className={styles['num']}>88889</span>
        <span className={styles['icon']}></span>
      </div>
    )
  }
}
export default CommentLike
