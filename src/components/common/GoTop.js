import React, { Component } from 'react'
export default class extends Component {
  handleClick () {
    const { onClick } = this.props
    onClick && onClick()
  }
  render () {
    const { className, onClick } = this.props
    return (
      <div onClick={this.handleClick.bind(this)} className={className} style={styles.icon}></div>
    )
  }
}
const styles = {
  icon: {
    background: 'url("' + require('@/imgs/bt_sq_top@2x.png') + '") center / 1.4rem 1.4rem no-repeat',
    width: '1.4rem',
    height: '1.4rem'
  }
}
