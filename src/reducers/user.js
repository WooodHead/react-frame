/**
 * user reducer
 */
import { handleActions } from 'redux-actions'
export default handleActions({
  'change login state': (state, {loginState}) => {
    return {
      ...state,
      loginState
    }
  }
}, {
  loginState: 'unknown' // 登录状态 unknown logined nologin
})
