import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delBbsComment } from '@/util/api'
class CommentDel extends Component {
  delComment () {
    var { index, item, commentList } = this.props
    delBbsComment(item.id).then(res => {
      console.log(res)
      if (res.result) {
        console.log(this.props)
        commentList.splice(index, 1)
        this.props.dispatch({type: 'change topic detail comment list', refresh: true, commentList: [...commentList]})
      }
    })
  }
  render () {
    const { className, item, index, userinfo } = this.props
    return (
      <div>
        {
          userinfo.user_id === item.users.user_id && <div onClick={this.delComment.bind(this)} className={className} style={styles.del}>删除</div>
        }
      </div>
    )
  }
}
export default connect(({user, topic}) => { return {...user, ...topic} })(CommentDel)
const styles = {
  del: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '.24rem',
    color: '#999999',
    lineHeight: '.36rem'
  }
}
