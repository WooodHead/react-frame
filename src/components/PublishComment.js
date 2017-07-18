import React, { Component } from 'react'
import { Popup } from 'antd-mobile'
import styles from '@/stylus/publish.comment'
export default class extends Component {
  toCancel () {
    Popup.hide()
  }
  render () {
    return (
      <div className={styles['view']}>
        <div className={styles['header']}>
          <div className={styles['cancel']}><span onClick={this.toCancel.bind(this)}>取消</span></div>
          <div className={styles['title']}><span>写评论</span></div>
          <div className={styles['publish']}><span>发表</span></div>
        </div>
        <div className={styles['content']}>
          <textarea></textarea>
        </div>
      </div>
    )
  }
}
