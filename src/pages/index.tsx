import React from 'react'
declare const require: {
   <T>(path: string): T;
   (paths: string[], callback: (...modules: any[]) => void): void;
   ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}
const styles = require<any>('../stylus/index')
import Hello from '../components/Hello'
export interface IMyProps {
  className?: any
}

import { Button, Modal } from 'antd'
export default class extends React.Component<IMyProps, any> {
  public state = { visible: false }
  public handleOk() {
    this.setState({
     visible: true
   })
  }
  public handleCancel() {
    this.setState({
      visible: false
    })
  }
  public HandleClick(): void {
    this.handleOk()
  }
  public render() {
    return (
      <div className={styles.container}>
        <h1>Hello man</h1>
        <Button onClick={this.HandleClick.bind(this)} type='primary'>打开</Button>
        <Modal
          title='Basic Modal'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel.bind(this)}
        >
          <Hello name='man' />
        </Modal>
      </div>
    )
  }
}
