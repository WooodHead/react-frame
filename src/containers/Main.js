import { notification } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import iNotify from 'title-notify'
import { fetchCurrent } from '@/utils/api'
import Loading from '@/components/common/Loading'
import Top from '@/containers/Top'
import * as actions from '@/actions/common'
const styles = {
  container: {
    width: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0'
  },
  main: {
    width: '100%',
    position: 'absolute',
    top: '60px',
    bottom: 0,
    overflow: 'scroll'
  }
}
class Main extends React.Component {
  componentWillMount () {
    this.props.dispatch(actions.fetchCurrentInfoAction((err, res) => {
      if (err) {
        this.props.history.push('/login')
      }
      if (res) {
        this.props.dispatch(actions.fetchRangInfoAction())
        this.props.dispatch(actions.fetchMessageNumAction())
        this.setTimeFetchMessage()
      }
    }))
    this.initNotify()
  }
  initNotify () {
    // console.log(iNotify)
    this.iNotify = new iNotify({
      message: '有消息了。', // 标题
      effect: 'flash', // flash | scroll 闪烁还是滚动
      onclick: function () { // 点击弹出的窗之行事件
        console.log('---')
      },
      // 可选播放声音
      audio: {
        file: [require('@/assets/msg.mp3')]
      },
      // 标题闪烁，或者滚动速度
      interval: 1000,
      // 可选，默认绿底白字的  Favicon
      updateFavicon: {
        // favicon 字体颜色
        textColor: '#fff',
        // 背景颜色，设置背景颜色透明，将值设置为“transparent”
        backgroundColor: '#2F9A00'
      },
      // 可选chrome浏览器通知，默认不填写就是下面的内容
      notification: {
        title: '通知！', // 设置标题
        icon: 'favicon.ico', // 设置图标 icon 默认为 Favicon
        body: '您来了一条新消息' // 设置消息内容
      }
    })
    if (!this.iNotify.isPermission()) {
      notification.warn({
        message: '消息通知',
        description: '您的浏览器禁止了消息通知，请开启以方便获取最新的消息通知！'
      })
    }
  }
  setTimeFetchMessage () {
    setInterval(() => {
      this.props.dispatch(actions.fetchMessageNumAction((res) => {
        if (parseInt(res.Msg) > 0) {
          this.iNotify.notify({
            openurl: '/#message'
          })
          this.iNotify.player()
        }
        if (parseInt(res.Communicate) > 0) {
          this.iNotify.notify({
            openurl: '/#workorder'
          })
          this.iNotify.player()
        }
      }))
    }, 60000)
  }
  render () {
    const { ajaxCount, online } = this.props
    return (
      <div style={styles.container}>
        {ajaxCount > 0 && <Loading />}
        { online && <div>
          <Top />
          <div style={styles.main}>
            {this.props.children}
          </div>
        </div> }
      </div>
    )
  }
}
export default withRouter(connect(({common}) => common)(Main))
