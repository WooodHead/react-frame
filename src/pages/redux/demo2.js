import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchTopicList } from '@/actions/topic'
import { Table, Icon } from 'antd'

class Demo2 extends Component {
  constructor () {
    super()
    this.columns = [{
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: text => {
        return (<a href="#">{text}</a>)
      }
    }, {
      title: 'Content',
      dataIndex: 'content',
      key: 'content'
    }]
  }
  componentWillMount () {
    this.props.dispatch(fetchTopicList({name: 2}))
  }
  render () {
    const {list} = this.props
    console.log(list)
    return (
      <div>
        <h1>demo2</h1>
        <Table rowKey={record => record.id} columns={this.columns} dataSource={list} />
      </div>
    )
  }
}
export default withRouter(connect(({ topic }) => {
  const { list } = topic
  return {
    list
  }
})(Demo2))
