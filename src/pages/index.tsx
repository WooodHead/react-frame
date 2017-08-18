import React from 'react'

// import styles from '../stylus/app'
import Hello from '../components/Hello'
export interface IMyProps {
  className?: any
}
interface IMyClassName {
  container: any
}
const style: IMyClassName = {
  container: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    margin: 0,
    padding: 0,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
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
      <div style={style.container}>
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
