import { Icon, Popover } from 'antd'
import React from 'react'
import { fetchRejectedCommunicate } from '../utils/api'
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

class ChatsIcon extends React.Component <any, MyStates> {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }
  public getPopupContainer () {
    return this.refs.icon
  }
  public render () {
    return (
      <Popover
        placement='top'
        title={'驳回记录'}
        content={
          this.state.data.map((item: any, index: number) =>
            <p key={'reject-msg-content-' + index}>{item.RealName}</p>
          )
        }
        trigger='click'
        overlayStyle={{width: '400px'}}
         getPopupContainer={this.getPopupContainer.bind(this)}
      >
        <div ref='icon'></div>
        <Icon
          type='menu-unfold'
          style={{cursor: 'pointer'}}
          onClick={this.iconClick.bind(this, this.props.receiptId)}
        />
      </Popover>
    )
  }
  public iconClick (ReceiptId: number) {
    if (this.state.data.length === 0) {
      fetchRejectedCommunicate({receiptId: ReceiptId, tars: 12345}).then( (res: any) => {
        this.setState({data: res.data})
      })
    }
    console.log(ReceiptId)
  }
}
export default ChatsIcon
