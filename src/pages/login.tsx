import React from 'react'

declare function require(path: string): any

const styles = require('../stylus/app')

console.log(styles, 'style')

class Login extends React.Component {
  public render() {
    return (
      <div>
        login
      </div>
    )
  }
}

export default Login
