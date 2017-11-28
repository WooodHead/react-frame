import { handleActions } from 'redux-actions'

export default handleActions({
  'update seachable company': (state) => {
    return {
      ...state,
      ajaxCount: state.ajaxCount + 1
    }
  }
}, {
  searchableCompanys: []
})
