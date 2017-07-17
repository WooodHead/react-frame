import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from '@/stylus/topic-item'

import TopicTag from '@/components/common/TopicTag'
class TopicItem extends Component {
  constructor () {
    super()
    this.toStart = this.toStart.bind(this)
    this.toLove = this.toLove.bind(this)
  }
  toStart () {
    var el = this.refs.start
    $.tipsBox({
      obj: $(el),
      str: '+1',
      callback: function () {
        // alert(5);
      }
    })
  }
  toLove () {
    var el = this.refs.love
    $.tipsBox({
      obj: $(el),
      str: '+1',
      callback: function () {
        // alert(5);
      }
    })
  }
  render () {
    const { className, title, user, history } = this.props
    return (
      <div className={styles['topic-item'] + ' ' + className}>
        <div className={styles['header']}>
          <img src={user ? user['head_img'] : ''} className={styles['avatar']} data-preview-src="" data-preview-group="1"/>
          <div className={styles['header-right']} onClick={() => history.push('/topic/detail/' + this.props.id)}>
            <div className={styles['header-right-first-fl']}>
              <span className={styles['nickname']} style={{marginRight: '18px'}}>{user ? user.nickname : ''}</span>
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
        </div>
        <div onClick={() => history.push('/topic/detail/' + this.props.id)} className={styles['content']}>
          <p>{title}</p>
        </div>
        <div className={styles['footer']}>
          <div className={styles['start']} ref="start" onClick={this.toStart}><span>{this.props['collection_num']}</span></div>
          <div className={styles['comment']}><span>{this.props['comment_num']}</span></div>
          <div className={styles['love']} ref="love" onClick={this.toLove}><span>{this.props['zan_num']}</span></div>
        </div>
      </div>
    )
  }
}
export default withRouter(TopicItem)
