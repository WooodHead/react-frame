import React, { Component } from 'react'

import styles from '@/stylus/topic-comment'

import CommentLike from '@/components/CommentLike'

class TopicCommentItem extends Component {
  render () {
    return (
      <div className={styles['topic-comment-item']}>
        <div className={styles['avatar']}>
          <img src="https://www.wanglibao.com/images/bbs/avatar1.png" />
        </div>
        <div className={styles['topic-comment-item-right']}>
          <div className={styles['right-first-fl']}>
            <div className={styles['first-fl-left']}>
              <div className={styles['nickname']}>昵称昵称昵称昵称</div>
              <div className={styles['first-fl-left-second-fl']}>
                <span>3楼</span>
                <span className={styles['separated']}>·</span>
                <span>12分钟前</span>
              </div>
            </div>
            <div className={styles['first-fl-right']}>
              <CommentLike />
            </div>
          </div>
          <div className={styles['topic-comment-item-content']}>
            网利社区全新升级了！网利社区全新升级了！网利社区全新升级了！网利社区全新升级了！网利社区全网利社区全全全...
          </div>
        </div>
      </div>
    )
  }
}
export default TopicCommentItem
