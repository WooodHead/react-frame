import React from 'react'
import { render } from 'react-dom'

import 'lib/mui/css/mui.css'

import Router from '@/router'

import 'stylus/app'

// 懒加载引入mui
// var load = require('bundle-loader?lazy!lib/mui/js/mui')
// load(function (mui) {
//   window.mui = mui
// })

render(
  <Router />,
  document.getElementById('root')
)
