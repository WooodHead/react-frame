import React from 'react'
import { Icon } from 'antd-mobile'
import styles from '@/stylus/loading'
export default function () {
  return (
    <div className={styles['topic-load-more']}>
      <div className="mui-pull-loading mui-icon mui-spinner"></div>
      <span>加载中...</span>
    </div>
  )
}
