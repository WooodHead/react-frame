import { handleActions } from 'redux-actions'

export default handleActions({
  'update seachable company': (state) => {
    return {
      ...state
    }
  }
}, {
  searchableCompanys: []
})
