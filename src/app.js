import React from 'react'
import { render } from 'react-dom'

import 'lib/mui/css/mui.css'
import 'lib/mui/js/mui'

import Router from '@/router'

import 'stylus/app'
console.log(Router)
render(
  <Router />,
  document.getElementById('root')
)
