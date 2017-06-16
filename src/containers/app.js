import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Spin } from 'antd'
class App extends Component {
  componentWillMount () {
  }
  render () {
    console.log(this.props, 'props')
    const { loading } = this.props
    console.log(this.loading)
    return (
      <div className="app">
        <Spin spinning={loading} delay={0} >{this.props.children}</Spin>
      </div>
    )
  }
}
export default withRouter(connect((state) => {
  console.log(state)
  const {
    loading,
    list
  } = state.topic

  return {
    loading,
    list
  }
})(App))
