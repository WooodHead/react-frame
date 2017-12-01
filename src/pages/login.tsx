import { Button, Checkbox, Form, Icon, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { loginApi } from '../utils/api'

interface  MyProps extends FormComponentProps, RouteComponentProps<any> {}

interface MyStates {
  submit?: boolean
  result?: any
  validate: 1 | 2
}

const styles = require('@/stylus/login')
const FormItem = Form.Item
class Login extends React.Component<MyProps, MyStates> {
  constructor (props: MyProps) {
    super(props)
    this.state = {
      submit: false,
      validate: 1
    }
  }
  public handleSubmit (e: any) {
    e.preventDefault()
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        delete(values.remember)
        this.setState({
          submit: true
        })
        loginApi(values).then((res: any) => {
          this.setState({
            submit: false,
            result: res,
            validate: 2
          })
          if (res.status) {
            this.props.history.push('/dashboard')
          } else {
            const { message } = res
            if (/not found user/.test(message)) {
              this.props.form.validateFields(['UserName'], {force: true}, () => {
                console.log('nothing')
              })
            } else {
              this.props.form.validateFields(['UserPassWord'], {force: true}, () => {})
            }
          }
        })
      }
    })
  }
  public validator (rule: any, value: any, cb: any) {
    console.log(this.state, rule, value, '333')
    if (this.state.validate === 2) {
      const { message } = this.state.result
      if (/not found user/.test(message)) {
        cb('此用户名不存在')
      } else {
        cb(message)
      }
      this.setState({
        validate: 1
      })
    } else {
      if (value === '' || value === undefined) {
        switch (rule.field) {
          case 'UserName':
            cb('用户名不能为空')
            break
          case 'UserPassWord':
            cb('密码不能为空')
            break
        }
      }
    }
    cb()
  }
  public render () {
    console.log(this.props)
    const { getFieldDecorator } = this.props.form
    return (
      <div className={styles.container}>
        <div className={styles.radial}></div>
        <div className={styles.erv}></div>
        <div className={styles.loginForm}>
          <div className={styles.icon}></div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormItem>
             {getFieldDecorator('UserName', {
               rules: [{
                  validator: this.validator.bind(this)
               }]
             })(
                <Input prefix={<Icon type='user'/>}  />
             )}
            </FormItem>
            <FormItem>
             {getFieldDecorator('UserPassWord', {
               rules: [{
                  validator: this.validator.bind(this)
               }]
             })(
              <Input prefix={<Icon type='lock'/>} type='password' />
             )}
            </FormItem>
            <FormItem>
              <Button
                loading={this.state.submit}
                type='primary'
                style={{width: '100%'}}
                htmlType='submit'
                className='login-form-button'
              >
                登录
              </Button>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <a href='/#forgetpwd' className='login-form-forgot' style={{float: 'right'}}>忘记密码</a>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(withRouter(Login))
