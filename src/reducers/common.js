import { handleActions } from 'redux-actions'

export default handleActions({
  'loading show': (state) => {
    return {
      ...state,
      loading: true,
      ajaxCount: state.ajaxCount + 1
    }
  },
  'loading hidden': (state) => {
    return {
      ...state,
      loading: false,
      ajaxCount: state.ajaxCount - 1
    }
  }
}, {
  loading: false,
  ajaxCount: 0
})
