import { AutoComplete } from 'antd'
import classNames from 'classnames'
import React from 'react'
import { searchCompanys } from '../utils/api'

const styles = require('../stylus/search.company')
const Option = AutoComplete.Option

function onSelect(value: {}): void {
  console.log(value, 'onSelect')
}
export default class extends React.Component<any, MyState> {
  public dataSource: any[]
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
    searchCompanys({ userid: 217 }).then((res) => {
      this.dataSource = res.data
    })
  }
  public handleSearch(value: string) {
    if (value === '') {
      this.setState({
        dataSource: []
      })
      return
    }
    const res: string[] = []
    this.dataSource.map((item) => {
      if (new RegExp(value).test(item.CompanyName)) {
        res.push(item)
      }
    })
    this.setState({
      dataSource: res
    })
  }
  public removeSearch() {
    this.setState({
      dataSource: []
    })
  }
  public render() {
    const { dataSource } = this.state
    const { className } = this.props
    const children = dataSource.map((item) => {
      return <Option key={item.CompanyId}>{item.CompanyName}</Option>
    })
    return (
      <div className={classNames(styles.container, className)}>
        <i className='i-remove' id='companyClear' onClick={this.removeSearch.bind(this)}></i>
        <i className='i-search'></i>
        <div className='form-control'>
          <AutoComplete
            dataSource={dataSource}
            onSelect={onSelect}
            onSearch={this.handleSearch.bind(this)}
            placeholder='搜索公司'>
            {children}
          </AutoComplete>
        </div>
      </div>
    )
  }
}
