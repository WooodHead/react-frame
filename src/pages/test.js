import React, { Component } from 'react'
var load = require('bundle-loader?lazy!lib/mui/js/mui')
load(function (mui) {
  // mui.init()
})
// window.mui = mui
// alert('mui')
export default class extends Component {
  componentDidMount () {
    // console.log(window.mui, '好哈')
    // window.mui.init()
  }
  render () {
    return (
      <div>
        <div className="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div className="mui-scroll">
            <a className="mui-control-item mui-active">
              推荐
            </a>
            <a className="mui-control-item">
              热点
            </a>
            <a className="mui-control-item">
              北京
            </a>
            <a className="mui-control-item">
              社会
            </a>
            <a className="mui-control-item">
              娱乐
            </a>
            <a className="mui-control-item">
              科技
            </a>
            <a className="mui-control-item">
              科技
            </a>
            <a className="mui-control-item">
              科技
            </a>
            <a className="mui-control-item">
              科技
            </a>
            <a className="mui-control-item">
              科技
            </a>
            <a className="mui-control-item">
              科技
            </a>
            <a className="mui-control-item">
              科技
            </a>
            <a className="mui-control-item">
              科技
            </a>
          </div>
        </div>
      </div>
    )
  }
}
