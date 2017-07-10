import React, { Component } from 'react'
import { Tabs, ListView, RefreshControl } from 'antd-mobile'

import TopicItem from '@/components/TopicItem'
import Loading from '@/components/loading/TopicLoadMore'

import { connect } from 'react-redux'
import * as actions from '@/actions/topic'

import styles from '@/stylus/topic-container'

// 懒加载引入mui
var load = require('bundle-loader?lazy!lib/mui/js/mui')

const TabPane = Tabs.TabPane
function callback (key) {
  console.log('onChange', key)
}
function handleTabClick (key) {
  console.log('onTabClick', key)
}

function MyBody (props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  )
}
class Topic extends Component {
  constructor () {
    super()
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.state = {
      refreshing: false
    }
  }
  componentWillMount () {
    const { typeid, dispatch } = this.props
    dispatch(actions.fetchTopicList({
      method: 'getBbsThreadAllList',
      id: typeid,
      page: 1
    }))
  }
  componentDidMount () {
  }
  render () {
    const { topicList, typeid } = this.props

    const ds = this.dataSource.cloneWithRows(topicList[typeid])

    return (
      <div className={styles['topic-container'] + ' home-topic-container mt-32'}>
        <Tabs className="topic-container-tabs-bar" defaultActiveKey="1" onChange={callback} swipeable={false} animated={false} onTabClick={handleTabClick}>
          <TabPane tab="全部" key="1" >
            <div className={styles['list-view']}>
              {
                topicList[typeid] && topicList[typeid].map(function (item, index) {
                  // console.log(item, 'item')
                  return (
                    (<TopicItem key={index} {...item} className="mb-18" />)
                  )
                })
              }
            </div>
          </TabPane>
          <TabPane tab="精华" key="2">
            <TopicItem className="mb-18"/>
            <TopicItem className="mb-18"/>
            <TopicItem className="mb-18"/>
            <TopicItem className="mb-18"/>
          </TabPane>
          <TabPane tab="最热" key="3">
            <TopicItem className="mb-18"/>
          </TabPane>
          <TabPane tab="最新" key="4">
            <TopicItem className="mb-18"/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
function mapStateToProps ({topic}) {
  // const
  return topic
}
export default connect(mapStateToProps)(Topic)
