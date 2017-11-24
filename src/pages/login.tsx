import { Button, Checkbox, Form, Icon, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import React from 'react'
import { loginApi } from '../utils/api'

interface MyProps extends FormComponentProps {
}

interface MyStates {
  submit?: boolean
}

const styles = require('@/stylus/login')
const FormItem = Form.Item
class Login extends React.Component<MyProps, MyStates> {
  constructor (props: MyProps) {
    super(props)
  }
  public componentWillMount () {
    console.log(this.props)
  }
  public handleSubmit (e: any) {
    e.preventDefault()
    this.props.form.validateFields((err: any, values: any) => {
      console.log(values)
      if (!err) {
       console.log('Received values of form: ', values)
      }
    })
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
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormItem
             validateStatus={userNameError ? 'error' : 'success'}
            >
             {getFieldDecorator('userName', {
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
             {getFieldDecorator('password', {
               rules: [{
                 required: true, message: '请输入密码'
               }]
             })(
               <Input prefix={<Icon type='lock'/>}  />
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
