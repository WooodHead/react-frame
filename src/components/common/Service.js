/**
 * 客服
 */
import React, { Component } from 'react'
import wlb from '@/util/webview'
import native from '@/util/native'
export default class extends Component {
  toJumpService () {
    // wlb.ready({
    //   app: function (mixins) {
    //     mixins.jumpToOnLineAirlines()
    //   }
    // })
    native.ready(() => {
      var camera = plus.camera.getCamera()
      alert(camera)
    })
  }
  render () {
    const { className } = this.props
    return (
      <div onClick={this.toJumpService.bind(this)} className={className} style={styles.icon}>
      </div>
    )
  }
 }
const styles = {
  icon: {
    width: '1.4rem',
    height: '1.4rem',
    background: 'url(\'' + require('@/imgs/bt_sq_kf@2x.png') + '\') center / 1.4rem 1.4rem no-repeat'
  }
}
