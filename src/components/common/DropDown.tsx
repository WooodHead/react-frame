import { Button, Dropdown, Icon, Input, Menu, message } from 'antd'
import ClassNames from 'classnames'
import React from 'react'

const styles = require('../../stylus/dropdown')

interface MyState {
  visible: boolean
}

export default class extends React.Component<any, MyState> {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }
  public handleMenuClick(e: any) {
    console.log('x')
  }
  public componentDidMount() {
    var t: number = 0
    const { button, results } = this.refs
    $(button).hover(() => {
      console.log('button hover')
      clearTimeout(t)
      $(results).removeClass(styles.hidden)
      $(results).addClass(styles['custom-slide-up-enter'])
      t = setTimeout(() => {
        $(results).removeClass(styles['custom-slide-up-enter'])
      }, 300)
    }, (e) => {
      $(results).off('hover')
      $(results).hover(() => {
        console.log('result hover')
        clearTimeout(t)
      }, () => {
        t = setTimeout(() => {
          console.log('result setTimout')
          $(results).addClass(ClassNames(styles['custom-slide-up-leave']))
          $(results).removeClass(styles['custom-slide-up-leave'])
          $(results).addClass(styles.hidden)
        }, 500)
      })
      // $(results).addClass(ClassNames(styles['custom-slide-up-leave']))
      t = setTimeout(() => {
        console.log('button setTimout')
        $(results).removeClass(styles['custom-slide-up-leave'])
        $(results).addClass(styles.hidden)
      }, 500)
      // $(results).addClass(ClassNames(styles['custom-slide-up-leave']))
      // setTimeout(() => {
      //   $(results).removeClass(styles['custom-slide-up-leave'])
      //   $(results).addClass(styles.hidden)
      // }, 100)
    })
  }
  public render() {
    const { className } = this.props
    const { visible } = this.state
    return (
      <div className={ClassNames(styles.container, className)}>
        <div className='costom-btn-group' ref='button'>
          <div className='btn-left'><span>测试</span></div>
          <div className='btn-right'>
            <i className='fa fa-chevron-down' aria-hidden='true'></i>
          </div>
        </div>
        <div className={ClassNames(styles.results, styles.hidden)} ref='results'>
          <ul>
            <li>22222</li>
            <li>22222</li>
            <li>22222</li>
            <li>22222</li>
            <li>22222</li>
            <li>22222</li>
          </ul>
        </div>
      </div>
    )
  }
}
