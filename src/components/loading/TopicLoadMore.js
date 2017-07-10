import React from 'react'
import { Icon } from 'antd-mobile'
import styles from '@/stylus/loading'
export default function () {
  return (
    <div className={styles['topic-load-more']}>
      <Icon type="loading" size={55} style={{marginRight: '10px'}} /><span>加载中...</span>
    </div>
  )
}
