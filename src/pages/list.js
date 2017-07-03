import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { WhiteSpace, WingBlank, ListView } from 'antd-mobile'

import { connect } from 'react-redux'

import style from '@/stylus/list'
import Loading from '@/components/loading/TopicLoadMore'
import { fetchTopicList } from '@/actions/topic'

function MyBody (props) {
  return (
    <div className={[style['am-list-body'], style['my-body']]}>
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  )
}

class List extends Component {
  constructor () {
    super()
    const getRowData = (dataBlob, rowID) => dataBlob[rowID]

    this.dataSource = new ListView.DataSource({
      getRowData,
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.genData = (pIndex = 1) => {
      this.props.fetchTopicList({pageNumber: pIndex})
    }

    this.onEndReached = this.onEndReached.bind(this)
  }
  componentWillMount () {
    this.genData()
  }
  componentDidMount () {
  }
  onEndReached (event) {
    // return
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.props.isLoading && !this.props.hasMore) {
      return
    }
    console.log('reach end', event)
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.genData()
    }, 1000)
  }

  render () {
    const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED'
        }}
      />
    )
    const row = (rowData, sectionID, rowID) => {

      // return (
      //   <div key={rowID} className={style.row}>
      //     <div className={style['row-title']}>{obj.title}</div>
      //     <div style={{ display: 'flex', padding: '0.3rem 0' }}>
      //       <img style={{ height: '1.28rem', marginRight: '0.3rem' }} src={obj.img} alt="icon" />
      //       <div className={style['row-text']}>
      //         <div style={{ marginBottom: '0.16rem', fontWeight: 'bold' }}>{obj.des}</div>
      //         <div><span style={{ fontSize: '0.6rem', color: '#FF6E27' }}>35</span>¥</div>
      //       </div>
      //     </div>
      //   </div>
      // )
    }
    console.log(this.props.list, 'list')
    const dataSource = this.dataSource.cloneWithRows(this.props.list)
    console.log(dataSource, 'list')

    return (
      <div>
        <WhiteSpace />
        <WingBlank>
          <ListView ref="lv"
            dataSource={dataSource}
            renderHeader={() => <span>header</span>}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              <Loading />
            </div>)}
            renderSectionHeader={sectionData => (
              <div></div>
            )}
            renderBodyComponent={() => <MyBody />}
            renderRow={row}
            renderSeparator={separator}
            className={style.fortest}
            style={{
              height: document.documentElement.clientHeight * 3 / 4,
              overflow: 'auto',
              border: '1px solid #ddd',
              margin: '0.1rem 0'
            }}
            pageSize={4}
            onScroll={() => { console.log('scroll') }}
            scrollRenderAheadDistance={500}
            scrollEventThrottle={200}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
          />
        </WingBlank>
      </div>
    )
  }
}
function mapStateToProps ({ topic }) {
  console.log(topic.list)
  return {
    list: topic.list
  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch: dispatch,
    fetchTopicList: (payload) => {
      dispatch(fetchTopicList(payload))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
