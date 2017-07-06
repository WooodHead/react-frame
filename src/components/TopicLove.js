/**
 * 帖子详情点赞
 */

import React, { Component } from 'react'
import styles from '@/stylus/topic-love'
class TopicLove extends Component {
  constructor () {
    super()
    this.toClick = this.toClick.bind(this)
    this.state = {
      clicked: false
    }
  }
  toClick () {
    this.setState({
      clicked: true
    })
  }
  render () {
    return (
      <div className={styles['love'] + ' ' + (this.state.clicked ? styles['clicked'] : styles['click'])} onClick={this.toClick}><span>666</span></div>
    )
  }
}
export default TopicLove
