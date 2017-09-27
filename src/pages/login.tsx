import { Button } from 'antd'
import React from 'react'
export interface IMyProps {
  className?: any
}
export default class Login extends React.Component<IMyProps, any> {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }
  public handleClick() {
    this.setState({
      loading: !this.state.loading
    })
    setTimeout(() => {
      this.setState({
        loading: !this.state.loading
      })
    }, 1000)
  }
  public render() {
    return (
      <div>
        <div>login</div>
        <Button type='primary' onClick={this.handleClick.bind(this)} loading={this.state.loading}>
          Loading
        </Button>
        <i className='fa fa-camera-retro fa-lg'></i>
      </div>
    )
  }
}
// export default Login
