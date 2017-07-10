import React, { Component } from 'react'
class CommentDel extends Component {
  render () {
    const { className } = this.props
    return (
      <div className={className} style={styles.icon}></div>
    )
  }
}
export default CommentDel
const styles = {
  icon: {
    background: 'url(\'' + require('@/imgs/ic_sq_delete@2x.png') + '\') center / 36px 36px no-repeat',
    width: '36px',
    height: '36px'
  }
}
