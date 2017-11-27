import { Button, Form, Input } from 'antd'
import React from 'react'
const FormItem = Form.Item
import { FormComponentProps } from 'antd/lib/form/Form'
class EditPasswd extends React.Component <FormComponentProps, {}> {
  public handleValidator (rule: any, value: any, cb: any) {
    const { getFieldsValue, setFields } = this.props.form
    const inputs: any = getFieldsValue()
    if (inputs.NewPassword !== inputs.NewPassword2) {
      setFields({
        NewPassword2: {
          value: inputs.NewPassword2,
          errors: [new Error('两次输入的密码不一致')]
        }
      })
      if (rule.field === 'NewPassword2') {
        rule.message = '两次输入的密码不一致'
        cb('两次输入的密码不一致')
      }
    } else {
      setFields({
      NewPassword: {
          value: inputs.NewPassword
        }
      })
      setFields({
        NewPassword2: {
          value: inputs.NewPassword2
        }
      })
    }
    if (!value) {
      if (rule.field === 'OldPassword') {
        rule.message = '原密码不能为空'
        cb('原密码不能为空')
      } else {
        rule.message = '新密码不能为空'
        cb('新密码不能为空')
      }
    }
    cb()
  }
  public render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout='horizontal'>
       <FormItem
       >
         {getFieldDecorator('OldPassword', {
           rules: [{ required: true, message: '请输入原密码!', validator: this.handleValidator.bind(this) }]
         })(
           <Input type='password' placeholder='输入原密码' />
         )}
       </FormItem>
       <FormItem
       >
         {getFieldDecorator('NewPassword', {
           rules: [{ required: true, message: '请输入新密码!', validator: this.handleValidator.bind(this) }]
         })(
           <Input type='password' placeholder='输入新密码' />
         )}
       </FormItem>
       <FormItem
       >
         {getFieldDecorator('NewPassword2', {
           rules: [{ required: true, message: '请输入新密码!', validator: this.handleValidator.bind(this) }]
         })(
           <Input type='password' placeholder='输入新密码' />
         )}
       </FormItem>
      </Form>
    )
  }
}
export default Form.create()(EditPasswd)
