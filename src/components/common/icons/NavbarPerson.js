import React, { Component } from 'react'
import styles from '@/stylus/icons/navbar-person'
class NavbarPerson extends Component {
  render () {
    const { style } = this.props
    return (
      <div style={style} className={styles.person}></div>
    )
  }
}
export default NavbarPerson
