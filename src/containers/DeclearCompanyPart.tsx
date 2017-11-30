import React from 'react'
const styles = require('../stylus/declear.container')
class DeclearCompanyPart extends React.Component<any, {}> {
  public render () {
    return (
      <div className={styles.company}>
        <div className={styles['company-name']}>
          <span>北京海昱昌隆商贸有限公司</span>
        </div>
        <div className={styles['company-info']}>
          <span>
            纳税人类别：一般纳税人
          </span>
          <span>
            税号：123456789012345678
          </span>
          <span>
            会计：张璐
          </span>
          <span>
            确认时间：2017-10-09 12:30:57
          </span>
        </div>
      </div>
    )
  }
}
export default DeclearCompanyPart
