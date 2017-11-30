import React from 'react'
import { DeclearCompanyPart, DeclearContainer } from '../../containers'
const styles = require('../../stylus/declear.payment.result')
class PayMentResult extends React.Component<any, {}> {
  public print () {
    $(this.refs.table).print({
      title: '查看缴款结果',
      globalStyles: true,
      stylesheet : null,
      noPrintSelector : '.no-print',
      iframe : false,
      prepend : '<div>xxx</div>'
    })
  }
  public render () {
    return (
      <DeclearContainer currentTitle='查看缴款结果'>
        <div className={styles.container}>
          <DeclearCompanyPart />
          <div className={styles.operation}>
            <button type='button' className='btn btn-warning'>导出</button>
            <button type='button' className='btn btn-warning' onClick={this.print.bind(this)}>打印</button>
          </div>
          <div className={styles.table}>
            <table ref='table'>
              <thead>
                <tr>
                  <th>序号</th>
                  <th>征收项目名称</th>
                  <th>征收品目名称</th>
                  <th>税款所属期起</th>
                  <th>税款所属期止</th>
                  <th>税款种类名称</th>
                  <th>应补（退）金额</th>
                  <th>实缴税额</th>
                  <th>缴款期限</th>
                  <th>缴款日期</th>
                  <th>应税凭证序号</th>
                  <th>电子税票号码</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>序号</td>
                  <td>征收项目名称</td>
                  <td>征收品目名称</td>
                  <td>税款所属期起</td>
                  <td>税款所属期止</td>
                  <td>税款种类名称</td>
                  <td>应补（退）金额</td>
                  <td>实缴税额</td>
                  <td>缴款期限</td>
                  <td>缴款日期</td>
                  <td>应税凭证序号</td>
                  <td>电子税票号码</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DeclearContainer>
    )
  }
}
export default PayMentResult
