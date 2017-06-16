import React, {Component} from 'react'
import { Badge, Button, Icon, Switch } from 'antd'
const ButtonGroup = Button.Group
export default class extends Component {
  constructor () {
    super()
    this.state = {
      count: 5
    }
  }
  componentWillMount () {
  }
  componentDidMount () {
  }
  increase () {
    const count = this.state.count + 1
    this.setState({ count })
  }
  decline () {
    let count = this.state.count - 1
    if (count < 0) {
      count = 0
    }
    this.setState({ count })
  }
  render () {
    return (
      <div className="redux-demo-1">
        <div>
          <div className="rectangle">
            <Badge count={this.state.count}>
            </Badge>
          </div>
          <ButtonGroup className="mt-20">
            <Button onClick={this.decline.bind(this)}>
              <Icon type="minus" />
            </Button>
            <Button onClick={this.increase.bind(this)}>
              <Icon type="plus" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}
