import { Input } from 'antd'
import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/common'
import { fetchDeclareListAction } from '../actions/declearTax'
import DropDown from '../components/common/DropDown'
import stores from '../stores'
const styles = require('../stylus/declear.tax')
interface Conditions {
  userid: number
  status: number
  limit: number
  offset: number
  account: number | ''
  taxplayercategory: number
  companyname: string
}
interface MyStates {
  conditions: Conditions
}

class DeclearTax extends React.Component<any, MyStates> {
  public declareStatus = [{
    title: '--申报状态--',
    key: -1
  }, {
    title: '全部申报完成',
    key: 1
  }, {
    title: '部分申报完成',
    key: 2
  }, {
    title: '未申报完成',
    key: 3
  }]
  public payTaxesType = [
    {
      title: '--纳税人类别--',
      key: -1
    }, {
      title: '小规模纳税人',
      key: 1
    }, {
      title: '一般纳税人',
      key: 2
    }
  ]
  public taxesType = [
    {
      title: '--国地税--',
      key: -1
    }, {
      title: '国税',
      key: 1
    }, {
      title: '地税',
      key: 2
    }
  ]
  constructor () {
    super()
    this.state = {
      conditions: {
        userid: 0,
        status: -1,
        limit: 15,
        offset: 0,
        account: '',
        taxplayercategory: -1,
        companyname: ''
      }
    }
  }
  public componentWillMount () {
    const { conditions } = this.state
    this.props.dispatch(actions.fetchAccountantsAction())
    this.props.dispatch(fetchDeclareListAction(conditions))
    stores.subscribe(() => {
      console.log('change')
    })
  }
  public processAccountant () {
    const { accountantList } = this.props
    if (accountantList.length === 0) {
      return []
    }
    const data: CustomOption[] = [{key: -1, title: '--所有会计--'}]
    accountantList.map((item: {ID: number, Name: string}) => {
      data.push({key: item.ID, title: item.Name})
    })
    return data
  }
  public toCheck (items: any, item: any) {
    console.log(items, item)
  }
  public toFold (items: any) {
    if ($('.company-' + items.CompanyId + ':eq(0)').children().eq(1).children('i').hasClass('fa-angle-down')) {
      $('.company-' + items.CompanyId + ':eq(0)').children().eq(1).children('i').removeClass('fa-angle-down')
      $('.company-' + items.CompanyId + ':eq(0)').children().eq(1).children('i').addClass('fa-angle-up')
      $('.company-' + items.CompanyId + ':gt(0)').hide()
    } else {
      $('.company-' + items.CompanyId + ':eq(0)').children().eq(1).children('i').removeClass('fa-angle-up')
      $('.company-' + items.CompanyId + ':eq(0)').children().eq(1).children('i').addClass('fa-angle-down')
      $('.company-' + items.CompanyId + ':gt(0)').show()
    }
  }
  public setTbodyContent () {
    const { declearData } = this.props
    const { CompanyList } = declearData
    const node: JSX.Element[] = []
    CompanyList.map((items: any, index: number) => {
      node.push(
        <tr
          className={'company-' + items.CompanyId + ' company'}
          key={'declear-tax-item-' + index}
          >
          <td><input onClick={this.toCheck.bind(this, items)} type='checkbox' /></td>
          <td>
            <i onClick={this.toFold.bind(this, items)} className='fold fa updown fa-angle-down' aria-hidden='true'></i>
          </td>
          <td colSpan={10}>
            <span className='clickable'>{items.CompanyName}</span>
            <span>
              纳税人类别：小规模纳税人
            </span>
            <span>
              税号：123456789012345678
            </span>
            <span>
              会计：王五
            </span>
            <span>
              确认时间：2017/11/29 12:04:17
            </span>
            <span className='clickable' onClick={() => this.props.history.push('declearResult')}>
              查看申报结果
            </span>
            <span className='clickable' onClick={() => this.props.history.push('declearPayment')}>
              查看缴款结果
            </span>
            <span className='clickable'>
              税款缴纳
            </span>
            <span className='clickable'>
              查看完税凭证
            </span>
            <span className='clickable'>
              查看往期申报结果
            </span>
          </td>
        </tr>
      )
      if (items.TaxList && items.TaxList.length > 0) {
        items.TaxList.map((item: any, sindex: number) => {
          node.push(
            <tr
              className={'company-' + items.CompanyId}
              key={'declear-tax-item-' + index + '-' + sindex}
              >
              <td><input onClick={this.toCheck.bind(this, items, item)} type='checkbox' /></td>
              <td>{item.ItemNo}</td>
              <td>
                <span
                  style={{color: item.Belong === '国' ? 'orange' : 'blue'}}> {item.Belong}
                </span>
                {item.TaxName}
              </td>
              <td>{item.FinishStatus}</td>
              <td>{item.FinishStatus}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span>人工申报</span>
                <span>一键申报</span>
              </td>
              <td>{item.TaxDateStart}</td>
              <td>{item.TacDateEnd}</td>
              <td>{item.ReturnMsg}</td>
            </tr>
          )
        })
      }
    })
    return node
  }
  public handleSelect (field: string, item: CustomOption) {
    let { conditions } = this.state
    conditions = Object.assign({}, conditions, {[field]: item.key})
    this.props.dispatch(fetchDeclareListAction(conditions))
  }
  public render () {
    const accountantList = this.processAccountant()
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          申报列表
        </h2>
        <div className={styles.box}>
          <div className={styles.header}>
            <div className={styles['box-title']}>
              <span>未申报</span>
            </div>
            <div className={styles.statistics}>
                <label>全部</label>
                <span>800</span>
                <label style={{marginLeft: '30px'}}>未申报</label>
                <span className={styles.mark}>200</span>
                <label>已申报</label>
                <span>300</span>
                <label style={{marginLeft: '30px'}}>申报失败</label>
                <span>300</span>
                <label>申报成功</label>
                <span>300</span>
                <label>申报作废</label>
                <span>300</span>
                <label style={{marginLeft: '30px'}}>缴款失败</label>
                <span>300</span>
                <label>缴款成功</label>
                <span>300</span>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.conditions}>
              <Input size='large' placeholder='公司名称' style={{width: '160px', float: 'left'}}/>
              <DropDown
                key='declear-tax-drop-down-1'
                className={styles.options}
                data={accountantList}
                callBack={this.handleSelect.bind(this, 'account')}
                >
              </DropDown>
              <DropDown
                key='declear-tax-drop-down-2'
                className={styles.options}
                data={this.payTaxesType}
                callBack={this.handleSelect.bind(this, 'taxplayercategory')}
                >
              </DropDown>
              <DropDown
                key='declear-tax-drop-down-3'
                className={styles.options}
                data={this.taxesType}
                callBack={this.handleSelect.bind(this, 'status')}
                >
              </DropDown>
              <DropDown
                key='declear-tax-drop-down-4'
                className={styles.options}
                data={this.declareStatus}
                callBack={this.handleSelect.bind(this, 'status')}
                >
              </DropDown>
              <div className={styles.refresh}>
                <i className='fa fa-refresh' aria-hidden='true'></i>
              </div>
              <div className='pull-right'>
                <button type='button' className='btn btn-sm btn-warning' style={{marginRight: '5px'}}>批量人工申报</button>
                <button type='button' className='btn btn-sm btn-warning'>批量一键报税</button>
              </div>
            </div>
            <div className={styles.table}>
              <table>
                <thead>
                  <tr>
                    <th><input type='checkbox' /></th>
                    <th>序号</th>
                    <th>申报税种</th>
                    <th>纳税期限</th>
                    <th>申报状态</th>
                    <th>申报方式</th>
                    <th>应补（退）金额</th>
                    <th>实缴税额</th>
                    <th>操作</th>
                    <th>税款所属期起</th>
                    <th>税款所属期止</th>
                    <th>提示信息</th>
                  </tr>
                </thead>
                <tbody>
                  {this.setTbodyContent()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  ({common, declearTax}: any) => {
    return {
      ...common,
      ...declearTax
    }
  }
)(withRouter(DeclearTax))
