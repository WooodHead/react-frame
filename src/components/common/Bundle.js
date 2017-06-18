import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Bundle extends Component {
  constructor () {
    super(...arguments)
    // this.load = this.load.bind(this)
    this.state = {
      mod: null
    }
  }
  componentWillMount () {
    this.load(this.props)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load (props) {
    console.log(props.load, 'props')
    this.setState({
      mod: null
    })
    props.load((mod) => {
      console.log(mod, 'mod')
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render () {
    console.log(this.state.mod, 'mod')
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}
export default Bundle
