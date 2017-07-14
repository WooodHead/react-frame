import React, { Component } from 'react'

import StickItem from '@/components/StickItem'
import styles from '@/stylus/stick'

import {getBbsThreadTopList} from '@/util/api'

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
  componentWillMount () {
    // getBbsThreadTopList().then((res) => {
    //   console.log(res)
    // })
  }
  render () {
    return (
      <div className={styles['stick-container']}>
        {
          data.map(function (item, index) {
            return (
              <StickItem className={Number(index) === data.length - 1 ? styles['no-border'] : ''} key={index} item={item} />
            )
          })
        }
      </div>
    )
  }
}
export default Stick
