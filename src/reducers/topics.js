import { handleActions } from 'redux-actions'

export default handleActions({
  'fetch topic list request': (state) => {
    return {
      ...state,
      loading: true
    }
  },
  'fetch topic list failure': (state, { payload }) => {
    return {
      ...state,
      ...payload
    }
  },
  'fetch topic list success': (state, { payload }) => {
    var dataBlob = {}
    const { list, total } = payload
    dataBlob = state.list.concat(list)
    console.log(dataBlob, 'dataBlob')
    return {
      ...state,
      list: dataBlob,
      loading: false
    }
  }
}, {
  list: [],
  isLoading: false,
  hasMore: true,
  rowIds: [],
  total: 0,
  loading: false
})
