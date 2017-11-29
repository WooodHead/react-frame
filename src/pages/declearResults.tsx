import { Table, Input, Row, Col, Button } from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'
import { fetchAllRejected, fetchRejectedCommunicate } from '../utils/api'
import React from 'react'
const styles = require('../stylus/declear.results')

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
  data: D[] | any
}
class DeclearResult extends React.Component <any, MyStates> {
  public constructor () {
    super()
    this.state = {
      data: []
    }
  }
  public columns: ColumnsConfig[] = [
    { title: '公司名称', width: 200, dataIndex: 'CompanyName', key: 'name', fixed: 'left', className: 'companyName' },
    { title: '票据名称', width: 400, dataIndex: 'ImgName', key: '1' ,
      render: (text, record) => (
        "aaa"
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
      <div className={styles.container}> 
        <div className={styles.head}>
          查看申报结果
          <Button className={styles.back}>返回</Button>
        </div>
        <div>

        </div>
        <div>
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
export default DeclearResult
