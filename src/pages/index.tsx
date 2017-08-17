import * as React from 'react'
export interface HelloProps { compiler: string; framework: string; }

import { Modal, Button } from 'antd'

export default class Demo extends React.Component<HelloProps, any> {
  render () {
    return (
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    )
  }
}
