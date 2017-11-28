import { Table, Input, Row, Col, Icon, Popover } from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'
import { fetchAllRejected } from '../utils/api'
import React from 'react'

interface ColumnsConfig extends TableColumnConfig<any> {}
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
  data: D[]
  visible: boolean
}
class ChatBox extends React.Component<any,{}>{
  public render () {
    return (
      <div>
        <p style={{fontSize:'20px'}}> asdasd </p>
      </div>
    )
  }
}
export default class SetRejected extends React.Component <any, MyStates> {
  constructor () {
    super()
    this.state = {
      data: [],
      visible: false
    }
  }
  public columns: ColumnsConfig[] = [
    { title: '公司名称', width: 200, dataIndex: 'CompanyName', key: 'name', fixed: 'left', className: 'companyName' },
    { title: '票据名称', dataIndex: 'ImgName', key: '1' ,
      render: (text, record) => (
        <Row gutter={8}>
          <Col className='gutter-row' span={20} >
            <a href='#' className='operation'>{record.ImgName}</a>
          </Col>
          <Col className='gutter-row' span={4} >
          <Popover
            placement="top"
            title={'驳回记录'}
            content={<ChatBox data={record.record}  />}
            trigger="click"
          >
            <Icon type='menu-unfold' style={{cursor: 'pointer'}} onClick={this.iconClick.bind(this, record)}/>
          </Popover>
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
  public onChange () {
    console.log(1)
  }
  public iconClick (record: {}) {
    if(!record){
      
    }
    console.log(record)
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
      <div>
        <h3>驳回票据</h3>
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
