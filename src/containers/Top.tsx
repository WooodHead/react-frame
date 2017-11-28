import { Modal, notification } from 'antd'
import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'
import { APP } from '../utils/app'
import EditPasswd from './EditPasswd'
const styles = require('@/stylus/top')
import { withRouter } from 'react-router'
import { changePasswd, loginOutApi } from '../utils/api'
import SearchCompany from './SearchCompany'
interface MyStates {
  arrowStatus?: string
  visible: boolean
}

class Top extends React.Component<any, MyStates> {
  constructor () {
    super()
    this.state = {
      arrowStatus: 'up',
      visible: false
    }
  }
  public componentDidMount () {
    $('#profile').hover(() => {
      $('#profile .dropdown').show()
    }, () => {
      $('#profile .dropdown').hide()
    })
    $('#system').hover(() => {
      $('#system .dropdown').show()
    }, () => {
      $('#system .dropdown').hide()
    })
  }
  public toLoginOut () {
    loginOutApi().then(() => {
      this.props.history.push('/login')
    })
  }
  public showMyGroup () {
    this.setState({
      arrowStatus: this.state.arrowStatus === 'up' ? 'down' : 'up'
    })
  }
  public editPasswd () {
    this.setState({
      visible: true
    })
  }
  public handleOk () {
    const ref: any = this.refs.editpasswd
    ref.validateFields({force: true}, (err: any, values: any) => {
      if (!err) {
        changePasswd(values).then((res) => {
          if (res.status) {
            this.setState({
              visible: false
            })
            notification.success({
              message: '密码修改',
              description: '恭喜您，修改密码成功！'
            })
          } else {
            notification.error({
              message: '密码修改',
              description: res.message
            })
          }
        })
      }
    })
  }
  public handleCancel () {
    this.setState({
      visible: false
    })
  }
  // 切换角色
  public switchUser (item: any) {
    $('#profile .dropdown').hide()
    const payload: any = {
      userInfo: {
        user: item.EmployeeName,
        id: item.UserId
      }
    }
    this.props.dispatch({type: 'change user', payload})
  }
  public render () {
    const { arrowStatus, visible } = this.state
    const { currentInfo, rangInfo, selectUserInfo, messageNum } = this.props
    return (
      <div className={styles.container}>
        <Modal
          title='修改密码'
          visible={visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <EditPasswd ref='editpasswd'/>
        </Modal>
        <div className={styles.logo}></div>
        <div className={styles.version}>{APP.Version}</div>
        <SearchCompany className='u-search' />
        <ul className='pull-right list-inline u-user'>
            <li>
                <a
                  href='#message'
                  className={classNames('i-message', { animated: messageNum.Msg }, 'zoomIn')}
                  title='消息'
                  style={{animationIterationCount: 'infinite'}}
                  >
                    <span className='glyphicon glyphicon-bell'></span>
                    {messageNum.Msg > 0 && <span className='badge' id='messageBadge'>
                      {messageNum.Msg}
                    </span>}
                </a>
                <div className='dropdown'>
                    <div className='dropdown-arrow'></div>
                    <div className='dropwdown-item'>
                        <a href='javascript:;'>您有5条信息</a>
                    </div>
                </div>
            </li>
            <li>
                <a href='#workorder'
                  className={classNames('i-workorder', { animated: messageNum.Communicate }, 'zoomIn')}
                  title='账务沟通'
                  style={{animationIterationCount: 'infinite'}}
                  >
                    <span className='glyphicon' style={{top: '-2px'}}>
                      <i className='fa fa-comments' aria-hidden='true'></i>
                      {messageNum.Communicate > 0 && <span className='badge' id='messageBadge'>
                        {messageNum.Communicate}
                      </span>}
                    </span>
                    <span className='badge animated' id='workorderBadge' style={{display: 'none'}}></span>
                </a>
            </li>
            <li id='system'>
                <a href='javascript:;' title='系统'>
                    <i className='glyphicon glyphicon-cog'></i>
                </a>
                <div className='dropdown' id='system-dropdown'>
                    <div className='dropdown-arrow'></div>
                    <div className='dropwdown-item'>
                        <span><a href='#accountManager' className=''>账号管理</a></span>
                    </div>

                </div>
            </li>
            <li id='profile'>
                <a href='javascript:;' className='i-user' id='user-icon' title='我的'>
                    <span className='glyphicon glyphicon-user'></span>
                </a>
                <span id='currentUser' className='current-user'>{selectUserInfo.user}</span>
                <div className='dropdown' id='user-dropdown'>
                    <div className='dropdown-arrow'></div>
                    <div className='dropwdown-item'>
                        <span id='username' className='groupMem'></span>
                    </div>
                    <div className='dropwdown-item' onClick={this.showMyGroup.bind(this)}>
                        <span className='groupMem' id='toggleGroup'>
                          我的小组
                          <i className={classNames('i-select', arrowStatus)}></i>
                        </span>
                        <div
                          className='u-group'
                          id='groupMemContainer'
                          style={{display: arrowStatus === 'up' ? 'none' : 'block'}}
                          >
                          {
                            rangInfo && rangInfo.map((item: any, index: number) => {
                              return (
                                <div
                                  onClick={this.switchUser.bind(this, item)}
                                  key={'rang-' + index}
                                  className='group-item'
                                  >
                                  {item.EmployeeName}
                                </div>
                              )
                            })
                          }
                        </div>
                    </div>
                    <div className='dropwdown-item modifyPassword'>
                        <span id='modifyPassword' onClick={this.editPasswd.bind(this)}>修改密码</span>
                    </div>
                    <div className='dropwdown-item'>
                        <a href='#download' className='i-download' title='帮助中心'>
                            帮助中心
                        </a>
                    </div>
                    <div className='dropwdown-item'>
                        <span onClick={this.toLoginOut.bind(this)} className='i-logout' title='退出'>
                            退出
                        </span>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    )
  }
}
export default withRouter(connect(({common}: any) => common)(Top))
