import { Table, Input, Row, Col, Icon } from 'antd';
import { TableColumnConfig } from 'antd/lib/table/Table';
import {  } from 'antd';
import { fetchAllRejected } from '../utils/api'
import React from 'react'
import { MyState } from 'src/pages/demo2';

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
}
// ReactDOM.render(<Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />, mountNode);
export default class SetRejected extends React.Component<any,MyStates> {
  constructor () {
    super()
    this.state = {
      // loading: false
      data:[]
    }
  }
  public columns: ColumnsConfig[] = [
    { title: '公司名称', width: 200, dataIndex: 'CompanyName', key: 'name', fixed: 'left', className:'companyName' },
    { title: '票据名称', dataIndex: 'ImgName', key: '1' ,
      render: (text, record) => (
        <Row gutter={8}>
          <Col className="gutter-row" span={20} >
            <a href="#" className="operation">{record.ImgName}</a>
          </Col>
          <Col className="gutter-row" span={4} >
            {/* <a href="#">回复</a> */}
              <Icon type="menu-unfold" style={{cursor:'pointer'}} onClick={this.iconClick.bind(this, record.ReceiptId)}/>
          </Col>
          
        </Row>
      ),
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
            <Col className="gutter-row" span={10} >
              <a href="#" className="operation">重新上传</a>
            </Col>
            <Col className="gutter-row" span={6} >
              <a href="#">回复</a>
            </Col>
            <Col className="gutter-row" span={6}>
              <a href="#">删除</a>
            </Col>
          </Row>
      ),
    },
  ]
  public onChange () {
    console.log(1)
  }
  public iconClick (id:string) {
    console.log(event)
  }
  public componentWillMount() {
    fetchAllRejected().then((res) => {
      // const data: D[] = []
      if (res.status && res.data.length) {
        // res.data.map((item: D) => {
        //   data.push(item)
        // })
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
          <Input size="large" placeholder="搜索" onChange={this.onChange.bind(this)} />
          <Table
           columns={this.columns} 
           dataSource={this.state.data} 
           scroll={{ x: 1300 }} 
           bordered 
           pagination={{defaultCurrent:1,total:this.state.data.length}} 
          />
        </div>
      </div>
    )
  }
}