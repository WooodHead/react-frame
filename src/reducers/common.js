import { handleActions } from 'redux-actions'

export default handleActions({
  'loading show': (state) => {
    return {
      ...state,
      ajaxCount: state.ajaxCount + 1
    }
  },
  'loading hidden': (state) => {
    return {
      ...state,
      ajaxCount: state.ajaxCount - 1
    }
  },
  'update current info': (state, { payload }) => {
    return {
      ...state,
      currentInfo: payload.currentInfo,
      selectUserInfo: { user: payload.currentInfo.EmployeeName, id: payload.currentInfo.UserId },
      online: true
    }
  },
  'change user': (state, { payload }) => {
    console.log(payload, 'chnage user')
    return {
      ...state,
      selectUserInfo: payload.userInfo
    }
  },
  'update rang info': (state, { payload }) => {
    return {
      ...state,
      rangInfo: payload.rangInfo
    }
  },
  'update message num': (state, { payload }) => {
    return {
      ...state,
      messageNum: {
        Msg: payload.Msg,
        Communicate: payload.Communicate
      }
    }
  },
  'update accountants list': (state, { payload }) => {
    return {
      ...state,
      accountantList: payload
    }
  }
}, {
  ajaxCount: 0,
  currentInfo: {},
  online: false,
  rangInfo: [],
  selectUserInfo: '',
  messageNum: {
    Msg: 0,
    Communicate: 0
  },
  accountantList: []
})
