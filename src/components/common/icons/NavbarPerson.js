import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import styles from '@/stylus/icons/navbar-person'
class NavbarPerson extends Component {
  render () {
    const { style } = this.props
    return (
      <Link to="/mine"><div style={style} className={styles.person}></div></Link>
    )
  }
}
export default withRouter(NavbarPerson)
