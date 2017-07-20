import React, { Component } from 'react'
import cx from 'classnames'
import styles from '@/stylus/topic.comment'

import CommentLike from '@/components/comment/CommentLike'
import CommentDel from '@/components/comment/CommentDel'

class TopicCommentItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isfull: false
    }
  }
  handleFold () {
    this.setState({
      isfull: !this.state.isfull
    })
  }
  render () {
    const { item, index } = this.props
    var el = this.refs.content
    return (
      <div className={styles['topic-comment-item']}>
        <div className={styles['avatar']}>
          <img src={item.users.head_img} />
        </div>
        <div className={styles['topic-comment-item-right']}>
          <div className={styles['right-first-fl']}>
            <div className={styles['first-fl-left']}>
              <div className={styles['nickname']}>{item.users.nickname}</div>
              <div className={styles['first-fl-left-second-fl']}>
                <span>{index + 1}楼</span>
                <span className={styles['separated']}>·</span>
                <span>{item.created_at}</span>
              </div>
            </div>
            <div className={styles['first-fl-right']}>
              <CommentLike index={index} item={item} />
              <CommentDel index={index} item={item} className="ml-24 mt-2"/>
            </div>
          </div>
          <div className={cx({[styles['topic-comment-item-content']]: !this.state.isfull, [styles['isfull']]: this.state.isfull})} ref="content">{item.content}</div>
          {
            el && el.scrollHeight > el.clientHeight && (<div className={this.state.isfull ? styles['pack-up'] : styles['show']} onClick={this.handleFold.bind(this)}><span>{this.state.isfull ? '收起评论' : '显示全部'}</span></div>)
          }
        </div>
      </div>
    )
  }
}
export default TopicCommentItem
