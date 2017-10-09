
import { Button } from 'antd'
import React from 'react'

// declare namespace JSX {
//    interface IntrinsicElements {
//        [elemName: string]: any;
//    }
// }

// declare function require(path: string): any
export interface IMyProps {
  className?: any,
  history: object
}
export interface IMyState {
  loading: boolean
}

export default class Login extends React.Component<IMyProps, IMyState> {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }
  public componentWillMount() {
    console.log(this.props.history)
  }
  public handleClick() {
    console.log(document)
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
        <button type='button' className='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal'>
          Launch demo modal
        </button>
        <div className='modal fade' id='myModal' role='dialog' aria-labelledby='myModalLabel'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span></button>
                <h4 className='modal-title' id='myModalLabel'>Modal title</h4>
              </div>
              <div className='modal-body'>
                ...
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                <button type='button' className='btn btn-primary'>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// export default Login
