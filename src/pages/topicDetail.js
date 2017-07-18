import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from '@/stylus/topic-detail'

import store from '@/stores'

import * as actions from '@/actions/topic'
import Navbar from '@/components/common/Navbar'
import TopicLove from '@/components/TopicLove'
import TopicComment from '@/containers/TopicComment'
import CommentEnter from '@/components/CommentEnter'
import Share from '@/components/common/icons/Share'

function createMarkup () {
  return {__html: '<embed src=\'http://player.youku.com/player.php/Type/Folder/Fid//Ob//sid/XMjg2OTQ3NTIyOA==/v.swf\' quality=\'high\' width=\'480\' height=\'400\' align=\'middle\' allowScriptAccess=\'always\' allowFullScreen=\'true\' mode=\'transparent\' type=\'application/x-shockwave-flash\'></embed>'}
}

class TopicDetail extends Component {
  componentWillMount () {
    var id = this.props.match.params.id
    const { dispatch } = this.props
    dispatch(actions.fetchTopicDetail(id, () => {
      setTimeout(() => {
        this.scrollToComment()
      }, 0)
    }, () => {
      this.props.history.replace('/')
    }))
    dispatch(actions.fetchTopicDetailCommentlist({
      refresh: true,
      id: id,
      page: 1
    }))
  }
  scrollToComment () {
    const hash = this.props.location.hash
    if (hash === '#comment') {
      $('.scroll-wrap').animate({
        scrollTop: $('#comment').offset().top - 90
      }, 100)
    }
  }
  componentDidMount () {
  }
  render () {
    const { topicDetailData } = this.props
    const detail = topicDetailData
    var id = this.props.match.params.id
    var cover = []
    if (detail.cover) {
      cover = JSON.parse(detail.cover)
      console.log(cover, 'cover')
    }
    return (
      <div className="layout">
        <Navbar
          titleContent="看帖"
          rightContent={<Share options={{
            title: detail.title,
            content: detail.content
          }} />}
          />
        <div className="scroll-wrap">
          <div className={styles['topic-box']}>
            <h1 className={styles['title']}>{detail.title}</h1>
            <div className={styles['topic-info']}>
              <div className={styles['user-avatar']}><img src={detail.user ? detail.user['head_img'] : ''} /></div>
              <div className={styles['topic-info-right']}>
                <h2 className={styles['nickname']}>{detail.user ? detail.user['nickname'] : ''}</h2>
                <div className={styles['topic-info-right-second-fl']}>
                  <span>{detail.created_at}</span>
                  <span className={styles['separated']}>·</span>
                  <span>{detail.views}人阅读</span>
                </div>
              </div>
            </div>
            <div className={styles['content']}>
              <p>{detail.content}</p>
              {/* <div dangerouslySetInnerHTML={createMarkup()}></div> */}
              <div className={styles['imgs']}>
                {
                  cover.length > 0 && cover.map((item, index) => {
                    return (
                      <div key={index} className={styles['img-item']}>
                        <img style={{marginTop: '.32rem'}} data-preview-src="" data-preview-group="1" src={item} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className={styles['love-area']}>
              <TopicLove item={detail} />
            </div>
          </div>
          <TopicComment />
        </div>
        <CommentEnter id={id} />
      </div>
    )
  }
}
export default withRouter(connect(({topic}) => topic)(TopicDetail))
