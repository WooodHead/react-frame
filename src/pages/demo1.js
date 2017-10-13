import React from 'react'
import { Alert } from 'antd'
import P from '@/plugins/alert/index'
class Demo1 extends React.Component {
  constructor (props) {
    super(props)
    console.log('constructor')
  }
  handleClick () {
    P.show({
      content: '确认跳转到demo2吗',
      confirm: () => {
        this.props.history.push('demo2')
      }
    })
  }
  render () {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this)}> demo 1</button>
        <Alert message="Warning text" type="warning" closable onClose={this.handleClick.bind(this)}/>
      </div>
    )
  }
}
export default Demo1
