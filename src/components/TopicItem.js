import React, { Component } from 'react'
import styles from '@/stylus/topic-item'
class TopicItem extends Component {
  render () {
    return (
      <div className={styles['topic-item']}>
        <div className={styles['header']}>
          <img src='https://www.wanglibao.com/images/bbs/avatar1.png' className={styles['avatar']} />
          <div className={styles['header-right']}>
            <div>
              <span className={styles['nickname']}>网利宝君</span>
              <span className={styles['hot']}></span>
            </div>
            <div className={styles['header-info']}>
              <span>刚刚</span>
              <span className={styles['separated']}>·</span>
              <span>1222人阅读</span>
            </div>
          </div>
        </div>
        <div className={styles['content']}>
          <p>网利社区全新升级了！网利社区全新升级了！网利社区全新升级了！</p>
        </div>
        <div className={styles['footer']}></div>
      </div>
    )
  }
}
export default TopicItem
