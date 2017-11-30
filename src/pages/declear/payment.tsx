import classNames from 'classnames'
import React from 'react'
import { DeclearCompanyPart, DeclearContainer } from '../../containers'
const styles = require('../../stylus/declear.payment')
class DeckearPayMent extends React.Component<any, {}> {
  public render () {
    return (
      <DeclearContainer currentTitle='税款缴纳'>
        <div className={styles.container}>
          <DeclearCompanyPart />
          <div className={styles.operation}>
            <button className='btn btn-warning btn-default'>
              缴款
            </button>
          </div>
          <div className={styles.box} style={{marginTop: '20px'}}>
            <div className={styles.left}>
              <span>
                缴
                款
                信
                息
              </span>
            </div>
            <div className={styles.right}>
              <table className={classNames(styles.table, styles.table1)}>
                <thead>
                  <tr>
                    <th>
                      <input type='checkbox' />
                    </th>
                    <th>
                      序号
                    </th>
                    <th>
                    纳税人识别号
                    </th>
                    <th>
                      应征凭证序号
                    </th>
                    <th>
                      征收项目
                    </th>
                    <th>
                      税款所属期起
                    </th>
                    <th>
                      税款所属期止
                    </th>
                    <th>
                      正税金额
                    </th>
                    <th>
                      滞纳金
                    </th>
                    <th>
                      缴款金额
                    </th>
                    <th>
                      缴款期限
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <input type='checkbox' />
                  </td>
                  <td>
                    序号
                  </td>
                  <td>
                  纳税人识别号
                  </td>
                  <td>
                    应征凭证序号
                  </td>
                  <td>
                    征收项目
                  </td>
                  <td>
                    税款所属期起
                  </td>
                  <td>
                    税款所属期止
                  </td>
                  <td>
                    正税金额
                  </td>
                  <td>
                    滞纳金
                  </td>
                  <td>
                    缴款金额
                  </td>
                  <td>
                    缴款期限
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.box} style={{marginTop: '-1px'}}>
            <div className={styles.left}>
              <span>
              选
              择
              三
              方
              协
              议
              </span>
            </div>
            <div className={styles.right}>
              <table className={classNames(styles.table, styles.table2)}>
                <thead>
                  <tr>
                    <th>
                      选择
                    </th>
                    <th>
                      三方协议号
                    </th>
                    <th>
                      缴款账号
                    </th>
                    <th>
                      缴款账号名称
                    </th>
                    <th>
                      清算行行号
                    </th>
                    <th>
                      开户行行号
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <input type='checkbox' />
                  </td>
                  <td>
                    序号
                  </td>
                  <td>
                  纳税人识别号
                  </td>
                  <td>
                    应征凭证序号
                  </td>
                  <td>
                    征收项目
                  </td>
                  <td>
                    税款所属期起
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DeclearContainer>
    )
  }
}
export default DeckearPayMent
