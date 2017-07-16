import React from 'react'
import { render } from 'react-dom'
import Router from '@/router'
import 'lib/mui/css/mui'
import 'lib/mui/js/mui.zoom'
import 'lib/mui/js/mui.previewimage'
import 'lib/mui/css/mui.previewimage'
import 'stylus/app'
mui.previewImage()
mui('body').on('tap', 'a', function () {
  window.top.location.href = this.href
})
render(
  <Router />,
  document.getElementById('root')
)
