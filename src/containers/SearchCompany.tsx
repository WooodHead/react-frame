import classNames from 'classnames'
import React from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import AutoComplete from '../components/common/AutoComplete'
import { searchCompanys } from '../utils/api'

const styles = require('../stylus/search.company')
interface MyProps {
  className?: string
}
interface MyState {
  dataSource: any
}
interface T {
  title: string
  key: number
}
class SearchCompany extends React.Component<MyProps, MyState> {
  public constructor () {
    super()
    this.state = {
      dataSource: []
    }
  }
  public componentWillMount () {
    searchCompanys({ userid: 217 }).then((res: any) => {
      if (res.status) {
        const data: T[] = []
        if (res.status && res.data && res.data.length) {
          res.data.map((item: {CompanyId: number, CompanyName: string}) => {
            data.push({key: item.CompanyId, title: item.CompanyName})
          })
        }
        this.setState({
          dataSource: data
        })
      }
    })
  }
  public removeSearch () {
    // $(findDOMNode(this.refs.autocomplete)).find('input').val('')
    $(findDOMNode(this.refs.autocomplete)).find('input').val('').blur()
  }
  public handleSelect (item: any) {
    // console.log(item, 'select')
  }
  public toSearch () {
    $(findDOMNode(this.refs.autocomplete)).find('input').click()
  }
  public render () {
    const { dataSource } = this.state
    const { className } = this.props
    return (
      <div className={classNames(styles.container, className)}>
        <i className='i-remove' id='companyClear' onClick={this.removeSearch.bind(this)}></i>
        <i className='i-search' onClick={this.toSearch.bind(this)}></i>
        <div className='form-control'>
          <AutoComplete
            onSelect={this.handleSelect.bind(this)}
            data={dataSource}
            className='auto-complete'
            placeholder='搜索公司'
            ref='autocomplete'
            >
          </AutoComplete>
        </div>
      </div>
    )
  }
}

export default connect(({current}: any) => current)(SearchCompany)
