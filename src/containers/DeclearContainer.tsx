import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
const styles = require('../stylus/declear.container')
class DeclearContainer extends React.Component<any, {}> {
  public render () {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            {this.props.currentTitle}
          </div>
          <div className={styles.goBack}>
            <button type='button' className='btn btn-warning' onClick={() => this.props.history.goBack()}>
              返回
            </button>
          </div>
        </div>
        <div className={styles.box}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default withRouter(DeclearContainer)
