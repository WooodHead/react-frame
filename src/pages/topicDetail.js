import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from '@/stylus/topic-detail'

import Navbar from '@/components/common/Navbar'
import TopicLove from '@/components/TopicLove'
import TopicComment from '@/containers/TopicComment'

function createMarkup () {
  return {__html: '<embed src=\'http://player.youku.com/player.php/Type/Folder/Fid//Ob//sid/XMjg2OTQ3NTIyOA==/v.swf\' quality=\'high\' width=\'480\' height=\'400\' align=\'middle\' allowScriptAccess=\'always\' allowFullScreen=\'true\' mode=\'transparent\' type=\'application/x-shockwave-flash\'></embed>'}
}

class TopicDetail extends Component {
  render () {
    return (
      <div className="layout">
        <Navbar titleContent="帖子详情" />
        <div className="scroll-wrap">
          <div className={styles['topic-box']}>
            <h1 className={styles['title']}>投资人见面会开始啦！</h1>
            <div className={styles['topic-info']}>
              <div className={styles['user-avatar']}><img src="https://www.wanglibao.com/images/bbs/avatar1.png" /></div>
              <div className={styles['topic-info-right']}>
                <h2 className={styles['nickname']}>一个两个三个小朋友</h2>
                <div className={styles['topic-info-right-second-fl']}>
                  <span>2017-05-03 08:38</span>
                  <span className={styles['separated']}>·</span>
                  <span>1222人阅读</span>
                </div>
              </div>
            </div>
            <div className={styles['content']}>
              <p>大家期待已久的投资人见面会即将在明天拉开帷幕。此次因为场地及时间限制，我们仅邀请了50位用户到场，不过没有到场的用户也不用灰心哟，你们可以：在6月10日下午2点大家期待已久的投资人见面会即将在明天拉开帷幕。，我们仅邀在6月10日下午2点。
              </p>
              {/* <div dangerouslySetInnerHTML={createMarkup()}></div> */}
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
