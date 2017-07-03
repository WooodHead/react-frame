import React, { Component } from 'react'

import StickItem from '@/components/StickItem'

const data = [
  {
    title: '网利社区全新升级了，欢迎大家勇跃勇跃勇跃勇跃...',
    type: '公告',
    istop: true
  },
  {
    title: '网利社区网利社区全新升级了！.',
    type: '',
    istop: true
  },
  {
    title: '网利社区全新升级了，欢迎大家勇跃勇跃勇跃勇跃...',
    type: '公告',
    istop: true
  }
]
class Stick extends Component {
  render () {
    return (
      <div>
        {
          data.map(function (item, index) {
            return (
              <StickItem key={index} item={item} />
            )
          })
        }
      </div>
    )
  }
}
export default Stick
