import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import cx from 'classnames'
import styles from '@/stylus/topic-item'

import TopicTag from '@/components/common/TopicTag'

import { AddThreadCollect, AddCommentZan } from '@/util/api'
class TopicItem extends Component {
  constructor () {
    super()
    this.state = {
      collected: false,
      loved: false
    }
  }
  // 收藏
  toStart (id) {
    var el = this.refs.start
    AddThreadCollect(id).then(res => {
      if (res.result) {
        this.setState({
          collected: true
        })
        $.tipsBox({
          obj: $(el),
          str: '+1',
          color: '#008DFF'
        })
      }
      if (res.error) {
        this.Toast.show(res.error.message)
      }
    })
  }
  // 点赞
  toLove (id) {
    var el = this.refs.love
    AddCommentZan(id).then(res => {
      if (res.result) {
        $.tipsBox({
          obj: $(el),
          str: '+1',
          color: '#E83C25'
        })
      }
      if (res.error) {
        this.Toast.show(res.error.message)
      }
    })
  }
  render () {
    const { className, title, user, history } = this.props
    var collected = this.state.collected
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
          <div className={cx({[styles['start']]: !collected, [styles['started']]: collected})} ref="start" onClick={this.toStart.bind(this, this.props.id)}><span>{this.props['collection_num']}</span></div>
          <div className={styles['comment']}><span onClick={() => history.push('/topic/detail/' + this.props.id + '#comment')}>{this.props['comment_num']}</span></div>
          <div className={styles['love']} ref="love" onClick={this.toLove.bind(this, this.props.id)}><span>{this.props['zan_num']}</span></div>
        </div>
      </div>
    )
  }
}
export default withRouter(TopicItem)
