import React from 'react'
const styles = require('@/stylus/top')
class Top extends React.Component<any, {}> {
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.version}></div>
      </div>
    )
  }
}
export default Top
