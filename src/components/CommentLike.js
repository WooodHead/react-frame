/**
 * 评论点赞
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from '@/stylus/comment.like'

import TopicTag from '@/components/common/TopicTag'

import { AddCommentZan } from '@/util/api'

class CommentLike extends Component {
  constructor () {
    super()
    this.state = {
      clicked: false
    }
    this.toClick = this.toClick.bind(this)
  }
  toClick () {
    const id = this.props.item.id
    const { index, item, commentList } = this.props
    var el = this.refs['comment-loved']
    console.log(item, 'item')
    if (item.zan || this.state.clicked) {
      return
    }
    AddCommentZan(id).then(res => {
      if (res.result) {
        item.zan_num += 1
        commentList[index] = item
        this.setState({
          clicked: true
        })
        $.tipsBox({
          obj: $(el),
          str: '+1',
          color: '#E83C25'
        })
        this.props.dispatch({type: 'change topic detail comment list', refresh: true, commentList: [...commentList]})
      }
    })
  }
  render () {
    const { item, index } = this.props
    return (
      <div onClick={this.toClick} className={styles['like-area'] + ' ' + (this.state.clicked ? styles['clicked'] : styles['can-click'])}>
        <span className={styles['num']}>{item.zan_num}</span>
        <span className={styles['icon']} ref="comment-loved"></span>
      </div>
    )
  }
}
export default connect(({topic}) => topic)(CommentLike)
