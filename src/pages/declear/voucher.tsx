import classNames from 'classnames'
import React from 'react'
import { DeclearCompanyPart, DeclearContainer } from '../../containers'
const styles = require('../../stylus/declear.voucher')
class Voucher extends React.Component <any, {}> {
  public render () {
    return (
      <DeclearContainer currentTitle='查看完税凭证'>
        <div className={styles.container}>
          <DeclearCompanyPart />
          <div className={styles.opration}>
            <button className='btn btn-warning btn-default'>导出</button>
            <button className='btn btn-warning btn-default'>打印</button>
          </div>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <td>序号</td>
                  <td>系统税票号</td>
                  <td>税种</td>
                  <td>预算科目</td>
                  <td>税款种类</td>
                  <td>税款属期</td>
                  <td>税款</td>
                  <td>缴款日期</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>序号</td>
                  <td>系统税票号</td>
                  <td>税种</td>
                  <td>预算科目</td>
                  <td>税款种类</td>
                  <td>税款属期</td>
                  <td>税款</td>
                  <td>缴款日期</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DeclearContainer>
    )
  }
}
export default Voucher
