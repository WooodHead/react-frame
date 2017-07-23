import React, { Component } from 'react'
import Navbar from '@/components/common/Navbar'
import native from '@/util/native'
mui.previewImage()
export default class extends Component {
  constructor () {
    super()
    this.state = {
      imgs: []
    }
  }
  openWebView () {
    mui.init({
      subpages: [{
        url: 'http://www.bao-ru.com:3001', // 子页面HTML地址，支持本地地址和网络地址
        id: 1, // 子页面标志
        styles: {
          top: 0, // 子页面顶部位置
          bottom: 0 // 子页面底部位置
        },
        extras: {} // 额外扩展参数
      }]
    })
  }
  downloader () {
    native.ready(() => {
      var dtask = plus.downloader.createDownload('http://img.taopic.com/uploads/allimg/140322/235058-1403220K93993.jpg', {}, (download, status) => {
        // alert('下载完成, ' + JSON.stringify(download) + ', status: ' + status)
        alert(status.toString())
        if (status === 200) {
          alert(download.filename)
          plus.gallery.save(download.filename, () => {
            alert('保存到相册成功')
            plus.io.resolveLocalFileSystemURL(download.filename, (entry) => {
              alert('获取文件信息成功')
              // entry.getMetadata((metadata) => {
              //   alert(JSON.stringify(metadata))
              // })
              // alert('获取文件信息成功'+ JSON.stringify(entry))
              entry.remove(() => {
                alert('删除文件成功')
              }, () => {
                alert('删除文件失败')
              })
            }, () => {
              alert('获取文件信息失败')
              // alert('获取文件信息失败, ' + JSON.stringify(error))
            })
          }, (error) => {
            console.log('保存到相册失败, ' + JSON.stringify(error))
          })
        }
      })
      dtask.start()
    })
  }
  ioTest () {
    native.ready(() => {
      // var url = '_downloads/235058-1403220K93993(13).jpg'
      var url = '_downloads/'
      plus.io.resolveLocalFileSystemURL(url, (fs) => {
        // alert('获取文件信息成功')
        var DirectoryReader = fs.createReader() // 创建目录读取对象
        // 获取当前目录中的所有文件和子目录
        DirectoryReader.readEntries((entries) => {
          // alert(entries.length)
          var imgs = []
          for (var i = 0; i < entries.length; i++) {
            // alert(entries[i].fullPath)
            // var fileURL = entries[i].toLocalURL() // 本地路径
            var fileURL = entries[i].toRemoteURL() // 网络路径
            // alert(fileURL)
            imgs.push(fileURL)
          }
          this.setState({
            imgs: imgs
          })
          // alert(entry.name)
          // alert('success')
          // fs.getMetadata((metadata) => {
          //   alert(JSON.stringify(metadata))
          // }, () => {
          //   alert('error')
          // }, true)
        }, () => {
          alert('error')
        })
        // fs.getMetadata((metadata) => {
        //   alert(JSON.stringify(metadata))
        // }, () => {
        //   alert('error')
        // }, true)
        // fs.remove(() => {
        //   alert('删除成功')
        // }, () => {
        //   alert('删除失败')
        // })
        // plus.gallery.save(url, () => {
        //   alert('保存到相册成功')
        //   // fs.remove(() => {
        //   //   alert('删除成功')
        //   // }, () => {
        //   //   alert('删除失败')
        //   // })
        // }, () => {
        //   alert('保存到相册失败')
        // })
        // alert(fs.fullPath)
        // fs.getMetadata((metadata) => {
        //   alert(JSON.stringify(metadata))
        // })
        // console.log(fs.name, fs.FileSystem)
        // alert('获取文件信息成功'+ JSON.stringify(entry))
        // entry.remove((entry) => {
        //   alert('删除文件成功, ' + JSON.stringify(entry))
        // }, (error) => {
        //   alert('删除文件失败, ' + JSON.stringify(error))
        // })
      }, () => {
        alert('获取文件信息失败')
        // alert('获取文件信息失败, ' + JSON.stringify(error))
      })
    })
  }
  nativeUITest () {
    // 显示自动消失的提示消息
    // plus.nativeUI.toast('系统提示', {})

    // 弹出系统日期选择对话框
    // plus.nativeUI.pickDate((event) => {
    //   alert(event.date)
    // }, (error) => {
    //   alert(error.message)
    // }, {title: '请选择日期'})

    // 弹出系统时间选择对话框
    plus.nativeUI.pickTime((event) => {
      alert(event.date)
    })
  }
  mapsTest () {
    // 设置目标位置坐标点和其实位置坐标点
    var dst = new plus.maps.Point(116.39131928, 39.90793074) // 天安门
    var src = new plus.maps.Point(116.335, 39.966) // 大钟寺
    plus.maps.openSysMap(dst, '天安门', src)
  }
  render () {
    return (
      <div className="layout">
        <Navbar titleContent="测试" />
        <div style={styles.wrap} className='scroll-wrap'>
          <button onClick={this.openWebView.bind(this)} type="button" style={styles.btn} className="mui-btn mui-btn-primary">打开一个webview</button>
          <button onClick={this.downloader.bind(this)} type="button" style={styles.btn} className="mui-btn mui-btn-primary">downloader</button>
          <button onClick={this.ioTest.bind(this)} type="button" style={styles.btn} className="mui-btn mui-btn-primary">IO test</button>
          <button onClick={this.nativeUITest.bind(this)} type="button" style={styles.btn} className="mui-btn mui-btn-primary">nativeUI test</button>
          <button onClick={this.mapsTest.bind(this)} type="button" style={styles.btn} className="mui-btn mui-btn-primary">maps test</button>
          <div>
            {
              this.state.imgs.map((item) => {
                return (
                  <img styles={styles.img} data-preview-src={item} data-preview-group="test-imgs" src={item} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
const styles = {
  wrap: {
    margin: '.3rem'
  },
  btn: {
    width: 'auto',
    fontSize: '.3rem',
    height: '.8rem',
    marginTop: '.2rem',
    marginRight: '.2rem',
    padding: '0 .2rem'
  },
  img: {
    width: '100%',
    marginBottom: '.2rem'
  }
}
