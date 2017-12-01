import { Col, Icon, Input, Popover, Row, Table } from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'
import React from 'react'
import ChatsIcon from '../components/ChatsIcon'
import { fetchAllRejected, fetchRejectedCommunicate } from '../utils/api'
const styles = {
  container: {
    width: '1200px',
    height: '100%',
    position: 'absolute',
    left: '50%',
    marginLeft: '-600px'
  },
  head: {
    padding: '40px 0',
    textAlign: 'center'
  }
}

interface D {
  CompanyId: number
  CompanyName: string
  ImgName: string
  ReceiptId: number
  ReceiptPath: string
  RejectedInfo: string
  RejectedRemark: string
  RelateDate: string
}
interface MyStates {
  data: D[] | any
}

class SetRejected extends React.Component <any, MyStates> {
  public columns: Array<TableColumnConfig<any>> = [
    { title: '公司名称', width: 200, dataIndex: 'CompanyName', key: 'name', fixed: 'left', className: 'companyName' },
    { title: '票据名称', width: 400, dataIndex: 'ImgName', key: '1' ,
      render: (text, record) => (
        <Row gutter={8}>
          <Col className='gutter-row' span={22} >
            <a href='#' className='operation'>{record.ImgName}</a>
          </Col>
          <Col className='gutter-row' span={2} >
          <ChatsIcon receiptId={record.ReceiptId}/>
          </Col>
        </Row>
      )
    },
    { title: '驳回原因', dataIndex: 'RejectedInfo', key: '2' },
    { title: '驳回备注', dataIndex: 'RejectedRemark', key: '3' },
    { title: '当前账期', dataIndex: 'RelateDate', key: '4' },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 180,
      render: (text, record) => (
          <Row gutter={8}>
            <Col className='gutter-row' span={10} >
              <a href='#' className='operation'>重新上传</a>
            </Col>
            <Col className='gutter-row' span={6} >
              <a href='#'>回复</a>
            </Col>
            <Col className='gutter-row' span={6}>
              <a href='#'>删除</a>
            </Col>
          </Row>
      )
    }
  ]
  public constructor () {
    super()
    this.state = {
      data: []
    }
  }
  public onChange () {
    console.log(1)
  }
  public componentWillMount () {
    fetchAllRejected().then((res) => {
      if (res.status && res.data.length) {
        this.setState({
          data: res.data
        })
      }
    })
  }
  public render () {
    return (
      <div style={{width: '1200px',
      height: '100%',
      position: 'absolute',
      left: '50%',
      marginLeft: '-600px'}}>
        <h3 style={styles.head}>驳回票据</h3>
        <div>
          <Input size='large' placeholder='搜索' onChange={this.onChange.bind(this)} />
          <Table
           columns={this.columns}
           dataSource={this.state.data}
           scroll={{ x: 1300 }}
           bordered
           pagination={{defaultCurrent: 1, total: this.state.data.length}}
          />
        </div>
      </div>
    )
  }
}
export default SetRejected
