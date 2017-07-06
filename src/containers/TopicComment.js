import React, { Component } from 'react'

import styles from '@/stylus/topic-comment'

import TopicCommentItem from '@/components/TopicCommentItem'

class TopicComment extends Component {
  render () {
    return (
      <div className={styles['comment-area']}>
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
export default TopicComment
