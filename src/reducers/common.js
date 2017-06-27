import { handleActions } from 'redux-actions'

export default handleActions({
  'loading show': (state) => {
    return {
      ...state,
      loading: true
    }
  },
  'loading hidden': (state) => {
    return {
      ...state,
      loading: false
    }
  }
}, {
  loading: false
})
