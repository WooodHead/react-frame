import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Index extends Component {
  componentWillMount () {
  }
  render () {
    return (
      <div className="home">
        home
      </div>
    )
  }
}
export default withRouter(Index)
