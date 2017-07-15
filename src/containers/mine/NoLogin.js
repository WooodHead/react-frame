import React, { Component } from 'react'

import styles from '@/stylus/mine/no-login'

export default class extends Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.btn}>
          <span>登录</span>
          <span>/</span>
          <span>注册</span>
        </div>
        <div className={styles.movement}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}
