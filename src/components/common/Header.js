import React, { Component } from 'react'
import styles from '@/stylus/header'
export default class extends Component {
  render () {
    const { titleContent, rightContent } = this.props
    return (
      <div className={styles['navbar']}>
        <div className={styles['navbar-left']}>
          <div className={styles['icon-go-back']}></div>
        </div>
        <span className={styles['navbar-title']}>{titleContent}</span>
        <div className={styles['navbar-right']}>
          {rightContent}
        </div>
      </div>
    )
  }
}
