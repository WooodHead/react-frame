import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from '@/stylus/mine/logined'

import ReactCoreImageUpload from '@/components/CoreImageUpload'
import { imgUpload } from '@/util/api'

class Logined extends Component {
  constructor (props) {
    super(props)
    this.handleRes = this.handleRes.bind(this)
    this.imageChanged = this.imageChanged.bind(this)
    this.imageUploading = this.imageUploading.bind(this)
  }
  handleRes (res) {
    this.props.dispatch({type: 'loading hidden'})
  }
  imageChanged () {
    console.log(arguments, 'changed')
  }
  imageUploading () {
    this.props.dispatch({type: 'loading show'})
  }
  render () {
    const { userinfo } = this.props
    console.log(userinfo)
    return (
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <ReactCoreImageUpload
              text=""
              className='pure-button'
              crop='server'
              inputOfFile="headImg"
              cropBtn={{ok: '选取', 'cancel': '取消'}}
              url={imgUpload}
              imageChanged={this.imageChanged}
              imageUploading={this.imageUploading}
              imageUploaded={this.handleRes}>
            </ReactCoreImageUpload>
            <img src={userinfo['head_img']}/>
          </div>
          <div className={styles['user-right']}>
            <h1 className={styles['nickname']}>{userinfo.nickname}</h1>
            <div className={styles['edit-info']}><span>编辑资料</span></div>
          </div>
        </div>
        <div className={styles['info']}>
          <div className={styles['item']}>
            <div className={styles['num']}>{userinfo.userZanNum}</div>
            <div className={styles['title']}><span>收到的赞</span></div>
          </div>
          <div className={styles['item']}>
            <div className={styles['num']}>{userinfo.userCommentNum}</div>
            <div className={styles['title']}><span>收到的评论</span></div>
          </div>
          <div className={styles['item']}>
            <div className={styles['num']}>{userinfo.userThreadCollectionNum}</div>
            <div className={styles['title']}><span>被收藏</span></div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(({user}) => user)(Logined)
