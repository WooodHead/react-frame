/**
 * 帖子详情评论区域
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from '@/stylus/topic.comment'

import TopicCommentItem from '@/components/TopicCommentItem'

class TopicComment extends Component {
  componentDidMount () {
    const hash = this.props.location.hash
    if (hash === '#comment') {
      $('.scroll-wrap').animate({
        scrollTop: $('#comment').offset().top - 90
      }, 100)
    }
  }
  render () {
    return (
      <div className={styles['comment-area']} id="comment">
        <div className={styles['title-bar']}>
          <span>评论（88）</span>
        </div>
        <div className="bg-white">
          <TopicCommentItem />
          <TopicCommentItem />
          <TopicCommentItem />
          <TopicCommentItem />
        </div>
      </div>
    )
  }
}
export default withRouter(TopicComment)
