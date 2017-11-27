import { Table,Input } from 'antd';
import { TableColumnConfig } from 'antd/lib/table/Table';
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
    { title: '公司名称', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: '票据名称', dataIndex: 'address', key: '1' },
    { title: '驳回原因', dataIndex: 'address', key: '2' },
    { title: '驳回备注', dataIndex: 'address', key: '3' },
    { title: '当前账期', dataIndex: 'address', key: '4' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a href="#">action</a>,
    },
  ]
  public onChange () {
    console.log(1)
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
          <Table columns={this.columns} dataSource={this.state.data} scroll={{ x: 1300 }} pagination={{defaultCurrent:1,total:this.state.data.length}} />
        </div>
      </div>
    )
  }
}