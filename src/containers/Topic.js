import React, { Component } from 'react'
import { Tabs, ListView } from 'antd-mobile'

import TopicItem from '@/components/TopicItem'
import Loading from '@/components/loading/TopicLoadMore'

import { connect } from 'react-redux'
import * as actions from '@/actions/topic'

import styles from '@/stylus/topic-container'

const TabPane = Tabs.TabPane
function callback (key) {
  console.log('onChange', key)
}
function handleTabClick (key) {
  console.log('onTabClick', key)
}
class Topic extends Component {
  constructor () {
    super()
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.onEndReached = this.onEndReached.bind(this)
  }
  componentWillMount () {
    const { typeid, dispatch } = this.props
    dispatch(actions.fetchTopicList({method: 'getBbsThreadAllList', id: typeid}))
  }
  componentDidMount () {
  }
  onEndReached () {
    console.log('end')
  }
  render () {
    const { topicList } = this.props
    const ds = this.dataSource.cloneWithRows(topicList)
    return (
      <div className={styles['topic-container'] + ' home-topic-container mt-32'}>
        <Tabs className="topic-container-tabs-bar" defaultActiveKey="1" onChange={callback} swipeable={false} animated={false} onTabClick={handleTabClick}>
          <TabPane tab="全部" key="1" >
            <div className={styles['list-view']}>
              <ListView
                dataSource={ds}
                useBodyScroll={true}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                  <Loading />
                </div>)}
                renderRow={ (rowData) => {
                  return (<TopicItem {...rowData} className="mb-18" />)
                } }
                onEndReached={this.onEndReached}
                />
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
