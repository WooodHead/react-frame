/**
 * 帖子详情评论区域
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from '@/stylus/topic.comment'

import TopicCommentItem from '@/components/TopicCommentItem'

import { getBbsCommentList } from '@/util/api'

class TopicComment extends Component {
  constructor () {
    super()
    this.state = {
      page: 1,
      data: []
    }
  }
  componentWillMount () {
    this.fetchData({refresh: true})
  }
  fetchData (params) {
    const id = this.props.match.params.id
    const page = this.state.page
    getBbsCommentList({
      page: page,
      id: id
    }).then(res => {
      console.log(res)
      if (params.refresh) {
        console.log(2)
      }
    })
  }
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
