import React from 'react'
import { connect } from 'react-redux'
const styles = require('../../stylus/declear.result')
import { Col, Row, Table  } from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'
import { DeclearCompanyPart, DeclearContainer } from '../../containers'
// import { MyState } from 'src/pages/demo3';

interface MyStates {
  data: any[]
}
class Result extends React.Component<any, MyStates> {
  public columns: Array<TableColumnConfig<any>> = [
    { title: '序号', dataIndex: '', key: '0', className: 'id' },
    { title: '征收项目名称', dataIndex: '', key: '1' ,
      render: (text, record, index) => (
        index + 1
      )
    },
    { title: '申报状态', dataIndex: '', key: '2' },
    { title: '税款所属期起', dataIndex: '', key: '3' },
    { title: '税款所属期止', dataIndex: '', key: '4' },
    { title: '申报日期', dataIndex: '', key: '5' },
    { title: '应补（退）金额', dataIndex: '', key: '6' },
    { title: '应税凭证序号', dataIndex: '', key: '7' },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
          <span>
            <a href='#'>申报作废</a>
          </span>
      )
    }
  ]
  public constructor () {
    super()
    this.state = {
      data: []
    }
  }
  public componentWillMount () {
  }
  public render () {
    return (
      <DeclearContainer currentTitle='查看申报结果'>
        <DeclearCompanyPart />
        <Table
          className={styles.DRtable}
          columns={this.columns}
          dataSource={this.state.data}
          bordered
        ></Table>
      </DeclearContainer>
    )
  }
}
export default connect()(Result)
