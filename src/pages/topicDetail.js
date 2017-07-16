import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from '@/stylus/topic-detail'

import store from '@/stores'

import Navbar from '@/components/common/Navbar'
import TopicLove from '@/components/TopicLove'
import TopicComment from '@/containers/TopicComment'

import { getBbsThreadDetail } from '@/util/api'

function createMarkup () {
  return {__html: '<embed src=\'http://player.youku.com/player.php/Type/Folder/Fid//Ob//sid/XMjg2OTQ3NTIyOA==/v.swf\' quality=\'high\' width=\'480\' height=\'400\' align=\'middle\' allowScriptAccess=\'always\' allowFullScreen=\'true\' mode=\'transparent\' type=\'application/x-shockwave-flash\'></embed>'}
}

class TopicDetail extends Component {
  constructor () {
    super()
    this.state = {
      detail: {}
    }
  }
  componentWillMount () {
    var id = this.props.match.params.id
    getBbsThreadDetail(id).then(res => {
      if (res.result) {
        this.setState({
          detail: res.result.data
        })
      } else {
        console.log(this.props.history)
        this.props.history.replace('/')
      }
    })
  }
  componentDidMount () {
  }
  render () {
    const { detail } = this.state
    return (
      <div className="layout">
        <Navbar titleContent="帖子详情" />
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
              <img style={{marginTop: '.32rem'}} data-preview-src="" data-preview-group="1" src="https://image.wanglibao.com/yunying/201707071340461979.png" />
            </div>
            <div className={styles['love-area']}>
              <TopicLove />
            </div>
          </div>
          <TopicComment />
        </div>
      </div>
    )
  }
}
export default withRouter(TopicDetail)
