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
      this.setState({
        loading: true
      })
      if (error == null) {
        this.$api.topicAddRequest({
          type_id: 3,
          title: value.title,
          content: value.content
        }).then(res => {
          this.setState({
            loading: false
          })
          if (res.result) {
            this.Toast.info(res.result.message)
          } else {
            this.Toast.info(res.error.message)
          }
        })
      }
    })
    // this.setState({
    //   loading: true
    // })
    // setTimeout(() => {
    //   this.setState({
    //     loading: false
    //   })
    //   this.Toast.success('提交成功！!', 2)
    // }, 1000)
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
                initialValue: '网利宝',
                rules: [{required: true}]
              })}
              placeholder="请输入标题"
              clear
              type="title"
              maxLength={10}
              locale={{ confirmLabel: '计算' }}
            />
          <TextareaItem
              placeholder="请输入内容"
              data-seed="logId"
              autoFocus
              autoHeight={false}
              rows={5}
              clear
              count={100}
              {...getFieldProps('content', {
                initialValue: ''
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
