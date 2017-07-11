import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createForm } from 'rc-form'
import { Button, ImagePicker } from 'antd-mobile'

import { topicAddRequest, imgUploadRequest } from '@/util/api'
import Navbar from '@/components/common/Navbar'
import styles from '@/stylus/topic-add'

const data = []

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
    console.log(this)
    this.props.form.validateFields((error, value) => {
      console.log(error, 'error')
      const { title, content } = value
      if (title === '' && content === '') {
        return
      }
      if (title.length < 4 || title.length > 23) {
        this.Toast.info('标题为4-23个字')
        return
      }
      if (content.length < 15 || content.length > 500) {
        this.Toast.info('内容为15-500字')
        return
      }
      topicAddRequest({
        type_id: 7,
        title: value.title,
        content: value.content
      }).then((res) => {
        console.log(res)
        if (res.error) {
          this.Toast.info(res.error.message)
        }
      })
    })
  }
  onChange (files, type, index) {
    console.log(files, type, index, 'onChange')
    this.setState({
      files: files
    })
    if (type === 'remove') {
      return
    }
    imgUploadRequest({
      file: files[files.length - 1].file
    }).then((res) => {
      console.log(res)
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
  componentWillMount () {
    console.log(this)
  }
  componentDidMount () {
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
            <input {...getFieldProps('title', {
              onChange: this.wordChange,
              initialValue: ''
            })}
            placeholder="4-23字（必填）"/>
          </div>
          <div className={styles.content}>
            <textarea
              id={styles['text-area']}
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
