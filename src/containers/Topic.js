import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import TopicItem from '@/components/TopicItem'

import styles from '@/stylus/topic-container'

const TabPane = Tabs.TabPane
function callback (key) {
  console.log('onChange', key)
}
function handleTabClick (key) {
  console.log('onTabClick', key)
}
class Topic extends Component {
  componentDidMount () {
  }
  render () {
    return (
      <div className={styles['topic-container'] + ' mt-32'}>
        <Tabs className="topic-container-tabs-bar" defaultActiveKey="1" onChange={callback} swipeable={false} animated={false} onTabClick={handleTabClick}>
          <TabPane tab="全部" key="1" >
            <TopicItem className="mb-18"/>
            <TopicItem className="mb-18"/>
            <TopicItem className="mb-18"/>
            <TopicItem className="mb-18"/>
          </TabPane>
          <TabPane tab="精华" key="2">
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
export default Topic
