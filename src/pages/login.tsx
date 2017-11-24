import { Button, Checkbox, Form, Icon, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import React from 'react'
import { loginApi } from '../utils/api'

type MyProps = FormComponentProps

interface MyStates {
  submit?: boolean
}

const styles = require('@/stylus/login')
const FormItem = Form.Item
class Login extends React.Component<MyProps, MyStates> {
  constructor (props: MyProps) {
    super(props)
    this.state = {
      submit: false
    }
  }
  public handleSubmit (e: any) {
    this.setState({
      submit: true
    })
    e.preventDefault()
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        delete(values.remember)
        loginApi(values).then((res: any) => {
          console.log(res)
        })
      }
    })
  }
  public render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const userNameError = (isFieldTouched('UserName') || this.state.submit) && getFieldError('UserName')
    const passwdError = (isFieldTouched('UserPassWord') || this.state.submit) && getFieldError('UserPassWord')
    return (
      <div className={styles.container}>
        <div className={styles.radial}></div>
        <div className={styles.erv}></div>
        <div className={styles.loginForm}>
          <div className={styles.icon}></div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormItem
             validateStatus={userNameError ? 'error' : 'success'}
            >
             {getFieldDecorator('UserName', {
               rules: [{
                 required: true, message: '请输入用户名'
               }]
             })(
               <Input prefix={<Icon type='user'/>}  />
             )}
            </FormItem>
            <FormItem
             validateStatus={passwdError ? 'error' : 'success'}
            >
             {getFieldDecorator('UserPassWord', {
               rules: [{
                 required: true, message: '请输入密码'
               }]
             })(
               <Input prefix={<Icon type='lock'/>} type='password' />
             )}
            </FormItem>
            <FormItem>
              <Button type='primary' style={{width: '100%'}} htmlType='submit' className='login-form-button'>
                登录
              </Button>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <a className='login-form-forgot' href='' style={{float: 'right'}}>忘记密码</a>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)
