import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from '@/stylus/navbar'

class Navbar extends Component {
  constructor () {
    super()
    this.goBack = this.goBack.bind(this)
  }
  goBack () {
    this.props.history.goBack()
  }
  render () {
    const { titleContent, rightContent, titleClass, leftClick } = this.props
    console.log(titleContent)
    return (
      <div className={styles['navbar']}>
        <div className={styles['navbar-left']}>
          <div onClick={leftClick || this.goBack} className={styles['icon-go-back']}></div>
        </div>
        <span className={styles['navbar-title'] + ' ' + titleClass}>{titleContent}</span>
        <div className={styles['navbar-right']}>
          {rightContent}
        </div>
      </div>
    )
  }
}
export default withRouter(Navbar)
