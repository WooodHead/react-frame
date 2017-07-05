import React, { Component } from 'react'
import styles from '@/stylus/topic-item'

import TopicTag from '@/components/common/TopicTag'
class TopicItem extends Component {
  render () {
    return (
      <div className={styles['topic-item']}>
        <div className={styles['header']}>
          <img src='https://www.wanglibao.com/images/bbs/avatar1.png' className={styles['avatar']} />
          <div className={styles['header-right']}>
            <div className={styles['header-right-first-fl']}>
              <span className={styles['nickname']} style={{marginRight: '18px'}}>网利宝君</span>
              <TopicTag type="official" style={{marginRight: '18px'}}/>
              <TopicTag type="hot" style={{marginRight: '18px'}}/>
              <TopicTag type="essence" />
            </div>
            <div className={styles['header-right-second-fl']}>
              <span>刚刚</span>
              <span className={styles['separated']}>·</span>
              <span>1222人阅读</span>
            </div>
          </div>
        </div>
        <div className={styles['content']}>
          <p>网利社区全新升级了！网利社区全新升级了！网利社区全新升级了！</p>
        </div>
        <div className={styles['footer']}>
          <div className={styles['start']}><span>666</span></div>
          <div className={styles['comment']}><span>0</span></div>
          <div className={styles['love']}><span>666</span></div>
        </div>
      </div>
    )
  }
}
export default TopicItem
