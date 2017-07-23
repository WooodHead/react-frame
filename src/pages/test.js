import React, { Component } from 'react'
import Navbar from '@/components/common/Navbar'
import native from '@/util/native'
export default class extends Component {
  openWebView () {
    mui.init({
      subpages: [{
        url: 'http://www.bao-ru.com:3001', // 子页面HTML地址，支持本地地址和网络地址
        id: 1, // 子页面标志
        styles: {
          top: 0, // 子页面顶部位置
          bottom: 0 // 子页面底部位置
        },
        extras: {} // 额外扩展参数
      }]
    })
  }
  downloader () {
    native.ready(() => {
      var dtask = plus.downloader.createDownload('http://img.taopic.com/uploads/allimg/140322/235058-1403220K93993.jpg', {}, (download, status) => {
        alert('下载完成, ' + JSON.stringify(download) + ', status: ' + status)
      })
      dtask.start()
    })
  }
  render () {
    return (
      <div className="layout">
        <Navbar titleContent="测试" />
        <div style={styles.wrap}>
          <button onClick={this.openWebView.bind(this)} type="button" style={styles.btn} className="mui-btn mui-btn-primary">打开一个webview</button>
          <button onClick={this.downloader.bind(this)} type="button" style={styles.btn} className="mui-btn mui-btn-primary">downloader</button>
        </div>
      </div>
    )
  }
}
const styles = {
  wrap: {
    padding: '.3rem'
  },
  btn: {
    width: 'auto',
    fontSize: '.3rem',
    height: '.8rem',
    marginTop: '.2rem',
    marginRight: '.2rem',
    padding: '0 .2rem'
  }
}
