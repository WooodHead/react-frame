/**
 * 评论点赞
 */
import React, { Component } from 'react'

import styles from '@/stylus/comment.like'

import TopicTag from '@/components/common/TopicTag'

class CommentLike extends Component {
  constructor () {
    super()
    this.state = {
      clicked: false
    }
    this.toClick = this.toClick.bind(this)
  }
  toClick () {
    var el = this.refs['comment-loved']
    this.setState({
      clicked: true
    })
    $.tipsBox({
      obj: $(el),
      str: '+1',
      color: '#E83C25'
    })
  }
  render () {
    const { item } = this.props
    return (
      <div onClick={this.toClick} className={styles['like-area'] + ' ' + (this.state.clicked ? styles['clicked'] : styles['can-click'])}>
        <span className={styles['num']}>{item.zan_num}</span>
        <span className={styles['icon']} ref="comment-loved"></span>
      </div>
    )
  }
}
export default CommentLike
