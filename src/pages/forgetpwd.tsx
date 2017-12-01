import { Button, Checkbox, Form, Icon, Input } from 'antd'
import React from 'react'
// import { Link } from 'react-router'
const styles = require('@/stylus/forgetpwd')
const FormItem = Form.Item

class Forgetpwd extends React.Component<any, {}> {
  public T = 0
  public state = {
      sendTxt: '发送验证码',
      name: 'dingliang',
      isSend: false,
      sendSec: 60
  }
  public handleSubmit () {
    console.log(1)
  }
  public sendMsg () {
    if (!this.T) {
      this.T = setInterval(() => {
        let time = this.state.sendSec
        if (time === 0) {
          this.setState({sendTxt: '发送验证码', isSend: false, sendSec: 60})
          clearInterval(this.T)
          this.T = 0
        } else {
          this.setState({isSend: true})
          this.setState({sendTxt: '重新发送 ' + time})
          time--
          this.setState({sendSec: time})
        }
      }, 1000)
    } else {
      return
    }
    console.log(event)
  }
  public render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const userNameError = isFieldTouched('userName') && getFieldError('userName')
    const passwdError = isFieldTouched('password') && getFieldError('password')
    return (
      <div className={styles.container}>
        <div className={styles.radial}></div>
        <div className={styles.erv}></div>
        <div className={styles.loginForm}>
          <div className={styles.icon}></div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
             validateStatus={userNameError ? 'error' : 'success'}
            >
             {getFieldDecorator('telNum', {
               rules: [{
                 required: true, message: '请输入手机号码'
               }]
             })(
               <Input style={{paddingRight: '85px'}}/>
             )}
             <a
              className={this.state.isSend ? styles.sendedMsg : styles.sendMsg}
              onClick={this.sendMsg.bind(this)}
             >
              {this.state.sendTxt}
             </a>
            </FormItem>
            <FormItem
             validateStatus={passwdError ? 'error' : 'success'}
            >
             {getFieldDecorator('Msg', {
               rules: [{
                 required: true, message: '短信验证码'
               }]
             })(
               <Input />
             )}
            </FormItem>
            <FormItem>
              <Button type='primary' style={{width: '100%'}} htmlType='submit' className='login-form-button'>
              下一步
              </Button>
              <a className='login-form-forgot' href='/login' style={{float: 'right'}}>返回登录</a>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
export default Form.create()(Forgetpwd)
