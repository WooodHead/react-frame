import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from '@/stylus/topic-item'

import TopicTag from '@/components/common/TopicTag'
class TopicItem extends Component {
  render () {
    const { className, title, user } = this.props
    return (
      <div className={styles['topic-item'] + ' ' + className}>
        <div className={styles['header']}>
          <img src={user['head_img']} className={styles['avatar']} />
          <Link to={'/topic/id/' + this.props.id}>
            <div className={styles['header-right']}>
              <div className={styles['header-right-first-fl']}>
                <span className={styles['nickname']} style={{marginRight: '18px'}}>{user.nickname}</span>
                { this.props['isofficial'] === 1 && <TopicTag type="official" style={{marginRight: '18px'}}/> }
                { this.props['ishot'] === 1 && <TopicTag type="hot" style={{marginRight: '18px'}}/> }
                { this.props['isgreat'] === 1 && <TopicTag type="essence" /> }
              </div>
              <div className={styles['header-right-second-fl']}>
                <span>{this.props['created_at']}</span>
                <span className={styles['separated']}>·</span>
                <span>{this.props['views']}人阅读</span>
              </div>
            </div>
          </Link>
        </div>
        <Link to={'/topic/id/' + this.props.id}>
          <div className={styles['content']}>
            <p>{title}</p>
          </div>
        </Link>
        <div className={styles['footer']}>
          <div className={styles['start']}><span>{this.props['collection_num']}</span></div>
          <div className={styles['comment']}><span>{this.props['comment_num']}</span></div>
          <div className={styles['love']}><span>{this.props['zan_num']}</span></div>
        </div>
      </div>
    )
  }
}
export default TopicItem
