import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createForm } from 'rc-form'
import { Button, ImagePicker } from 'antd-mobile'

import Navbar from '@/components/common/Navbar'
import styles from '@/stylus/topic-add'

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121'
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122'
}]

class TopicAdd extends Component {
  constructor () {
    super()
    this.state = {
      files: data,
      disable: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.wordChange = this.wordChange.bind(this)
  }
  handleSubmit () {
    this.props.form.validateFields((error, value) => {
      console.log(error, value)
    })
  }
  onChange (files, type, index) {
    console.log(files, type, index)
    this.setState({
      files: files
    })
  }
  wordChange () {
    setTimeout(() => {
      this.props.form.validateFields((error, value) => {
        console.log(error)
        if (value.title === '' || value.content === '') {
          this.setState({
            disable: true
          })
        } else {
          this.setState({
            disable: false
          })
        }
      })
    }, 0)
  }
  render () {
    const { getFieldProps } = this.props.form
    console.log(getFieldProps('title'))
    const { files } = this.state
    return (
      <div className="layout">
        <Navbar
          titleContent={<span>发帖</span>}
          rightContent={
            <div className={this.state.disable ? styles.disable : styles.submit} onClick={this.handleSubmit}><span>发表</span></div>
          }
        />
        <div className="scroll-wrap bg-white">
          <div className={styles.title}>
            <span>标题：</span>
            <input type="text" name="title" value="" {...getFieldProps('title', {
              onChange: this.wordChange,
              initialValue: ''
            })}
            placeholder="4-23字（必填）"/>
          </div>
          <div className={styles.content}>
            <textarea
              {...getFieldProps('content', {
                onChange: this.wordChange,
                initialValue: ''
              })}
              placeholder="说说想说的..."
            ></textarea>
          </div>
          <ImagePicker
            className={styles['image-picker']}
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 9}
          />
        </div>
      </div>
    )
  }
}
export default withRouter(createForm()(TopicAdd))
