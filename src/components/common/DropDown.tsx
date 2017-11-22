import { Button, Dropdown, Icon, Input, Menu, message } from 'antd'
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
    // message.info('Click on menu item.')
    // console.log('click', e)
  }
  public componentDidMount() {
    $(this.refs.dropdown).hover(() => {
      this.setState({
        visible: true
      })
    })
  }
  public render() {
    const { visible } = this.state
    return (
      <div className={styles.container}>
        <div className='costom-btn-group'>
          <div className='btn-left'><span>测试</span></div>
          <div className='btn-right'>
            <i className='fa fa-chevron-down' aria-hidden='true'></i>
          </div>
        </div>
      </div>
    )
  }
}
