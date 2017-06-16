import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchTopicList } from '@/actions/topic'
import { Table, Icon, Pagination } from 'antd'

class Demo2 extends Component {
  constructor () {
    super()
    console.log(this.props, 'props')
    // const { total } = this.props
    this.onChange = this.onChange.bind(this)
    this.columns = [{
      title: 'id',
      dataIndex: 'id',
      width: 80,
      className: 'text-align-center',
      filterMultiple: true,
      render: text => {
        return (<a href="#">{text}</a>)
      }
    }, {
      title: 'Content',
      dataIndex: 'content',
      className: 'text-align-center',
      key: 'content'
    }]
    this.pagination = {
      showQuickJumper: true,
      defaultCurrent: 0,
      total: 0,
      onChange: this.onChange
    }
  }
  componentWillMount () {
    this.props.dispatch(fetchTopicList({name: 2}))
  }
  onChange (pageNumber) {
    this.props.dispatch(fetchTopicList({pageNumber}))
  }
  render () {
    const {list, total} = this.props
    console.log(list)
    this.pagination.total = total
    return (
      <div>
        <h1>demo2</h1>
        <Table pagination={this.pagination} rowKey={record => record.id} columns={this.columns} dataSource={list} />
      </div>
    )
  }
}
export default withRouter(connect(({ topic }) => {
  const { list, total } = topic
  return {
    list,
    total
  }
})(Demo2))
