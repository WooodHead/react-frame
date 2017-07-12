import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from '@/plugins/stylus/alert'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Alert from '@/plugins/alert'
const cx = classNames.bind(styles)
console.log(cx)
export default class extends Component {
  constructor () {
    super()
    this.handleConfirm = this.handleConfirm.bind(this)
    this.hide = this.hide.bind(this)
    this.state = {
      enter: true,
      leave: false
    }
  }
  componentWillMount () {
    console.log('will mount')
    setTimeout(() => {
      this.setState({
        enter: false
      })
    }, 300)
  }
  componentWillUnmount () {
    console.log('will unmount')
  }
  handleConfirm () {
    var newItems = this.state.items.concat([prompt('Enter some text')])
    this.setState({items: newItems})
  }
  hide () {
    this.setState({
      leave: true
    })
    setTimeout(() => {
      Alert.hide()
    }, 300)
  }
  render () {
    const className = cx({
      enter: this.state.enter,
      leave: this.state.leave
    })
    return (
      <div onClick={this.hide} className={className}>
        <div className={styles['modal-mask']}></div>
        <div className={styles['modal-wrap']}>
          <div className={styles['modal-content']}>
            <div className={styles['header']}></div>
            <div className={styles['text-content']}>
              <p>确定要放弃编辑吗？确定要放弃编辑吗？确定要放弃编辑吗？确定要放弃编辑吗？确定要放弃编辑吗？</p>
            </div>
            <div className={styles['footer']}>
              <span className={styles['cancel']}>取消</span>
              <span onClick={this.handleConfirm} className={styles['confirm']}>确定</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
