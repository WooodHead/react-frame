import React, { Component } from 'react'
class CommentDel extends Component {
  render () {
    const { className } = this.props
    return (
      <div className={className} style={styles.del}>删除</div>
    )
  }
}
export default CommentDel
const styles = {
  del: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '.24rem',
    color: '#999999',
    lineHeight: '.36rem'
  }
}
