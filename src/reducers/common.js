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
  'fetch current info': (state, { payload }) => {
    return {
      ...state,
      currentInfo: payload.currentInfo
    }
  },
  'fetch rang info': (state, { payload }) => {
    return {
      ...state,
      rangInfo: payload.rangInfo
    }
  }
}, {
  ajaxCount: 0,
  currentInfo: {},
  rangInfo: []
})
