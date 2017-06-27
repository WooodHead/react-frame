import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { List, InputItem, TextareaItem, Button, WhiteSpace, WingBlank, ActivityIndicator } from 'antd-mobile'
import { createForm } from 'rc-form'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      content: '',
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount () {
  }
  handleSubmit () {
    this.props.form.validateFields((error, value) => {
      console.log(error, value)
    })
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        loading: false
      })
      this.Toast.success('提交成功！', 2)
    }, 1000)
  }
  render () {
    const { getFieldProps } = this.props.form
    // console.log(this.props)
    return (
      <div className="home">
        <ActivityIndicator toast text="正在加载" animating={this.state.loading}/>
        <List renderHeader={() => 'Format'}>
          <InputItem
              {...getFieldProps('money', {
                initialValue: '222',
                rules: [{required: true}]
              })}
              placeholder="money keyboard"
              clear
              error={true}
              type="money"
              maxLength={10}
              locale={{ confirmLabel: '计算' }}
            />
          <TextareaItem
              title="标题"
              placeholder="auto focus in Alipay client"
              data-seed="logId"
              autoFocus
              autoHeight={false}
              rows={5}
              clear
              count={100}
              {...getFieldProps('content', {
                initialValue: '222'
              })}
            />
        </List>
        <WhiteSpace size="lg" />
        <WingBlank size="md"><Button className="btn" type="primary" onClick={this.handleSubmit}>提交</Button></WingBlank>
      </div>
    )
  }
}
export default withRouter(createForm()(Index))
