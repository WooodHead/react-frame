import React from 'react'
import { findDOMNode } from 'react-dom'
import AutoComplete, { Option } from '../components/common/AutoComplete'
import DropDown from '../components/common/DropDown'
import { fetchAllCompany, searchCompanys } from '../utils/api'
interface T {
  title: string
  key: number
}
interface MyStates {
  data: T[],
  dataSource: any
}
class DashBoard extends React.Component<any, MyStates> {
  constructor () {
    super()
    this.state = {
      data: [],
      dataSource: []
    }
  }
  public componentWillMount () {
    fetchAllCompany().then((res) => {
      const data: T[] = []
      if (res.status && res.data.length) {
        res.data.map((item: {CompanyId: number, CompanyName: string}) => {
          data.push({key: item.CompanyId, title: item.CompanyName})
        })
      }
      this.setState({
        data
      })
    })
    searchCompanys({ userid: 217 }).then((res: any) => {
      this.setState({
        dataSource: res.data
      })
    })
  }
  public handleCallBack (item: any) {
    console.log(item, 'callback')
  }
  public test () {
    console.log(findDOMNode(this.refs.autoComplete), this.refs.autoComplete, 'autoComplete')
  }
  public select () {
    console.log(arguments, 'select')
  }
  public render () {
    const { data, dataSource } = this.state
    const children = dataSource.map((item: any) => {
      return (<Option key={item.CompanyId} >{item.CompanyName}</Option>)
    })
    return (
      <div>
        <input onFocus={this.test.bind(this)}/>
        <DropDown
          ref='dropdown'
          data={data}
          filter
          className='mt-20'
          callBack={this.handleCallBack.bind(this)}
          style={{marginLeft: '20px', width: '150px'}}
          >
        </DropDown>
        <AutoComplete
          onSelect={this.select.bind(this)}
          data={this.state.dataSource}
          ref='autoComplete'>
          {children}
        </AutoComplete>

      </div>
    )
  }
}
export default DashBoard
