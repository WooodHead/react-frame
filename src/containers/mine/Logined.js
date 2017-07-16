import React, { Component } from 'react'
import styles from '@/stylus/mine/logined'

import ReactCoreImageUpload from '@/components/CoreImageUpload'

export default class extends Component {
  constructor () {
    super()
    this.state = {
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
    }
    this.handleRes = this.handleRes.bind(this)
  }
  handleRes (res) {
    console.log(res)
    this.setState({
      src: res.data.src
    })
  }
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <ReactCoreImageUpload
              text="Upload Your Image"
              className='pure-button'
              crop={true}
              inputOfFile="files"
              url="./api/upload.php"
              imageUploaded={this.handleRes}>
            </ReactCoreImageUpload>
            <img src="https://php1.wanglibao.com/images/bbs/avatar1.png"/>
          </div>
          <div className={styles['user-right']}>
            <h1 className={styles['nickname']}>网利宝</h1>
            <div className={styles['edit-info']}><span>编辑资料</span></div>
          </div>
        </div>
        <div className={styles['info']}>
          <div className={styles['item']}>
            <div className={styles['num']}>76</div>
            <div className={styles['title']}><span>收到的赞</span></div>
          </div>
          <div className={styles['item']}>
            <div className={styles['num']}>0</div>
            <div className={styles['title']}><span>收到的评论</span></div>
          </div>
          <div className={styles['item']}>
            <div className={styles['num']}>76</div>
            <div className={styles['title']}><span>被收藏</span></div>
          </div>
        </div>
      </div>
    )
  }
}
