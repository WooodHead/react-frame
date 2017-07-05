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
    console.log(this)
  }
  render () {
    return (
      <div className={styles['topic-container'] + ' mt32'}>
        <Tabs className="topic-container-tabs-bar" defaultActiveKey="1" onChange={callback} swipeable={false} animated={false} onTabClick={handleTabClick}>
          <TabPane tab="全部" key="1" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TopicItem />
            </div>
          </TabPane>
          <TabPane tab="精华" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡二内容
            </div>
          </TabPane>
          <TabPane tab="最热" key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡三内容
            </div>
          </TabPane>
          <TabPane tab="最新" key="4">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡四内容
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
export default Topic
