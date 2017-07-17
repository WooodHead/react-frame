/**
 * user actions
 */
import { createActions } from 'redux-actions'
import { loginStateRequest } from '@/util/api'

export const fetchLoginState = (payload) => dispatch => {
  loginStateRequest().then(res => {
    console.log(res)
    if (res.result) {
      var loginState = res.result.status === 1 ? 'logined' : 'nologin'
      dispatch({type: 'change login state', loginState})
    }
  })
}
