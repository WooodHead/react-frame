import { handleActions } from 'redux-actions'

export default handleActions({
  'update declear tax list': (state, { payload }) => {
    return {
      ...state,
      declearData: payload
    }
  }
}, {
  declearData: {
    CompanyList: []
  }
})
