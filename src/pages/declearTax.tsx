import { Checkbox, Input, Pagination } from 'antd'
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
  selectData: any
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
  constructor (props: any) {
    super(props)
    const { selectUserInfo } = this.props
    console.log(this.props)
    this.state = {
      conditions: {
        userid: selectUserInfo.id,
        status: -1,
        limit: 15,
        offset: 0,
        account: '',
        taxplayercategory: -1,
        companyname: ''
      },
      selectData: {
        length: 0
      }
    }
  }
  public componentWillMount () {
    const { conditions } = this.state
    this.props.dispatch(actions.fetchAccountantsAction())
    this.props.dispatch(fetchDeclareListAction(conditions))
    stores.subscribe(() => {
      this.handleUserIdChange()
      this.checkIsAllCheck()
    })
  }
  public componentWillReceiveProps (props: any, oldProps: any) {
    console.log(props, oldProps, 'props change')
  }
  public handleUserIdChange () {
    const { conditions } = this.state
    if (conditions.userid !== this.props.selectUserInfo.id) {
      conditions.userid = this.props.selectUserInfo.id
      this.setState({
        conditions
      }, () => {
        this.props.dispatch(fetchDeclareListAction(conditions))
      })
    }
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
  public toCheck (items: any, index: number, e: React.SyntheticEvent<any>) {
    // event.preventDefault()
    console.log(items, index)
    items = $.extend(true, {}, items)
    const { selectData } = this.state
    const TaxList = items.TaxList
    selectData.length = selectData.length >= 0 ? selectData.length : 0
    // 点击父级
    if (index === -1) {
      if (selectData[items.CompanyId]) {
        delete selectData[items.CompanyId]
        selectData.length --
      } else {
        selectData[items.CompanyId] = items
        selectData[items.CompanyId].TaxList = {}
        for (const val of TaxList) {
          const ItemId = val.ItemId
          selectData[items.CompanyId].TaxList[ItemId] = val
        }
        selectData.length ++
        selectData[items.CompanyId].TaxList.length = TaxList.length
      }
    } else {
      const ItemId = items.TaxList[index].ItemId
      if (selectData[items.CompanyId]) { // 子级已有被选项
        if (selectData[items.CompanyId].TaxList[ItemId]) {
          delete selectData[items.CompanyId].TaxList[ItemId]
          selectData[items.CompanyId].TaxList.length --
        } else {
          selectData[items.CompanyId].TaxList[ItemId] = TaxList[index]
          selectData[items.CompanyId].TaxList.length ++
        }
      } else { // 子级未被选
        selectData[items.CompanyId] = items
        selectData[items.CompanyId].TaxList = {
          length: 1,
          [ItemId]: TaxList[index]
        }
        selectData.length ++
      }
      if (selectData[items.CompanyId].TaxList.length === 0) {
        selectData.length --
        delete selectData[items.CompanyId]
      }
    }
    let IsAll = true
    for (const i in TaxList) {
      if (!selectData[items.CompanyId]) {
        IsAll = false
        break
      } else {
        const ItemId = TaxList[i].ItemId
        if (!selectData[items.CompanyId].TaxList[ItemId]) {
          IsAll = false
          break
        }
      }
    }
    if (selectData[items.CompanyId]) {
      selectData[items.CompanyId].IsAll = IsAll
    }

    this.setState({
      selectData
    }, () => {
      this.checkIsAllCheck()
    })
    console.log(selectData)
  }
  public checkIsAllCheck () {
    let allCheck = true
    $('table tbody input[type=checkbox]').each((elindex, el) => {
      if (!$(el).is(':checked')) {
        $('table thead input[type=checkbox]').prop('checked', false)
        allCheck = false
        return false
      }
    })
    if (allCheck && $('table tbody input[type=checkbox]').length) {
      $('table thead input[type=checkbox]').prop('checked', true)
    }
  }
  public toCheckAll (e: React.SyntheticEvent<any>) {
    const { declearData } = this.props
    const { CompanyList } = declearData
    const { selectData } = this.state
    const checked = $(e.currentTarget).prop('checked')
    const data = $.extend(true, [], CompanyList)
    selectData.length = selectData.length || 0
    if (checked) {
      for (const val of data) {
        if (!selectData[val.CompanyId]) {
          selectData.length ++
        }
        const TaxList = val.TaxList
        selectData[val.CompanyId] = val
        selectData[val.CompanyId].TaxList = {}
        selectData[val.CompanyId].IsAll = true
        for (const sval of TaxList) {
          selectData[val.CompanyId].TaxList[sval.ItemId] = sval
        }
        selectData[val.CompanyId].TaxList.length = TaxList.length
      }
    } else {
      for (const val of data) {
        if (selectData[val.CompanyId]) {
          delete selectData[val.CompanyId]
          selectData.length --
        }
      }
    }
    this.setState({
      selectData
    })
    console.log(selectData)
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
    const { selectData } = this.state
    const node: JSX.Element[] = []
    CompanyList.map((items: any, index: number) => {
      node.push(
        <tr
          className={'company-' + items.CompanyId + ' company'}
          key={'declear-tax-item-' + index}
        >
          <td>
            <Checkbox
              onChange={this.toCheck.bind(this, items, -1)}
              checked={selectData[items.CompanyId] && selectData[items.CompanyId].IsAll || false}
            >
            </Checkbox>
          </td>
          <td>
            <i onClick={this.toFold.bind(this, items)} className='fold fa updown fa-angle-down' aria-hidden='true'></i>
          </td>
          <td colSpan={10}>
            <div className={styles.company}>
              <span className='clickable'>{items.CompanyName}</span>
              <span>
                纳税人类别：{items.AddedValueName}
              </span>
              <span>
                税号：{items.NationalTaxNo}
              </span>
              <span>
                会计：{items.AccountantName}
              </span>
              <span>
                确认时间：{items.ConfirmTime}
              </span>
              <span className='clickable' onClick={() => this.props.history.push('declear/result')}>
                查看申报结果
              </span>
              <span className='clickable' onClick={() => this.props.history.push('declear/paymentResult')}>
                查看缴款结果
              </span>
              <span className='clickable' onClick={() => this.props.history.push('declear/payment')}>
                税款缴纳
              </span>
              <span className='clickable' onClick={() => this.props.history.push('declear/voucher')}>
                查看完税凭证
              </span>
              <span className='clickable'>
                查看往期申报结果
              </span>
            </div>
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
              <td>
                <Checkbox
                  onChange={this.toCheck.bind(this, items, sindex)}
                  checked={
                    selectData[items.CompanyId]
                    && selectData[items.CompanyId].TaxList[item.ItemId]
                    ? true : false
                  }
                >
                </Checkbox>
              </td>
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
    this.setState({
      conditions
    })
    this.props.dispatch(fetchDeclareListAction(conditions))
  }
  public onPageChange () {

  }
  public toRefresh () {
    const { conditions } = this.state
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
                <i className='fa fa-refresh' onClick={this.toRefresh.bind(this)} aria-hidden='true'></i>
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
                    <th><input type='checkbox' onClick={this.toCheckAll.bind(this)}/></th>
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
          <div className={styles.footer}>
            {
              this.props.declearData.CompanyTotal > 0 && <Pagination
                className={styles.pagination}
                showQuickJumper
                defaultCurrent={1}
                total={this.props.declearData.CompanyTotal}
                onChange={this.onPageChange.bind(this)}
              />
            }
            <span className={styles.information}>
              共 {this.props.declearData.CompanyTotal} 条数据
              {this.state.selectData.length > 0
                ? '已选公司：' + this.state.selectData.length + ' 家' : ''}
            </span>
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
