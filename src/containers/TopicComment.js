/**
 * 帖子详情评论区域
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import styles from '@/stylus/topic.comment'

import * as actions from '@/actions/topic'

import LoadingMore from '@/components/common/LoadingMore'
import TopicCommentItem from '@/components/TopicCommentItem'

class TopicComment extends Component {
  constructor () {
    super()
    this.state = {
      page: 1,
      data: [],
      loading: false
    }
  }
  componentWillMount () {
  }
  componentDidMount () {
    $('.scroll-wrap').scroll((el) => {
      if (el.target.scrollTop + el.target.clientHeight > el.target.scrollHeight - 50) {
        console.log('fetch data')
      }
    })
  }
  fetchData (params) {
    const id = this.props.match.params.id
    const page = this.state.page
    this.props.dispatch(actions.fetchTopicDetailCommentlist({
      refresh: true,
      id: id,
      page: page
    }))
  }
  render () {
    const { topicDetailData, commentList } = this.props
    return (
      <div className={styles['comment-area']} id="comment">
        <div className={styles['title-bar']}>
          <span>评论（{topicDetailData.comment_num || 0}）</span>
        </div>
        <div className="bg-white">
          {
            commentList.map((item, index) => {
              return (
                <TopicCommentItem key={index} index={index} item={item} />
              )
            })
          }
          {
            this.state.loading && (<LoadingMore />)
          }
        </div>
      </div>
    )
  }
}
export default withRouter(connect(({topic}) => topic)(TopicComment))
