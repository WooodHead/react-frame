import React from 'react'
import { APP } from '../utils/global.conf'
const styles = require('@/stylus/top')
import SearchCompany from './SearchCompany'
class Top extends React.Component<any, {}> {
  public componentDidMount () {
    $('#profile').hover(() => {
      $('#profile .dropdown').show()
    }, () => {
      $('#profile .dropdown').hide()
    })
  }
  public render () {
    return (
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.version}>{APP.Version}</div>
        <SearchCompany className='u-search' />
        <ul className='pull-right list-inline u-user'>
            <li>
                <a href='#message' className='i-message animated zoomIn' title='消息'
                  style={{animationIterationCount: 'infinite'}}>
                    <span className='glyphicon glyphicon-bell'></span>
                    <span className='badge' id='messageBadge'>14</span>
                </a>
                <div className='dropdown'>
                    <div className='dropdown-arrow'></div>
                    <div className='dropwdown-item'>
                        <a href='javascript:;'>您有5条信息</a>
                    </div>
                </div>
            </li>
            <li>
                <a href='#workorder' className='i-workorder' title='账务沟通'>
                    <span className='glyphicon' style={{top: '-2px'}}>
                      <i className='fa fa-comments' aria-hidden='true'></i>
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
                <span id='currentUser' className='current-user'>张璐</span>
                <div className='dropdown' id='user-dropdown'>
                    <div className='dropdown-arrow'></div>
                    <div className='dropwdown-item'>
                        <span id='username' className='groupMem'></span>
                    </div>
                    <div className='dropwdown-item' id='dropdownGroup'>
                        <span className='groupMem' id='toggleGroup'>我的小组 <i className='i-select'></i></span>
                        <div className='u-group' id='groupMemContainer'>
                        </div>
                    </div>
                    <div className='dropwdown-item modifyPassword'>
                        <span id='modifyPassword' data-toggle='modal' data-target='#myModal'>修改密码</span>
                    </div>
                    <div className='dropwdown-item'>
                        <a href='#download' className='i-download' title='帮助中心'>
                            帮助中心
                        </a>
                    </div>
                    <div className='dropwdown-item'>
                        <a href='#logout' className='i-logout' title='退出'>
                            退出
                        </a>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    )
  }
}
export default Top
