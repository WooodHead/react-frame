/**
 * topic reducer
 */
import { handleActions } from 'redux-actions'

export default handleActions({
  'fetch topic all type': (state, { payload }) => {
    const { topicTypes } = payload
    return {
      ...state,
      topicTypes
    }
  },
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
    const { data, total } = payload
    return {
      ...state,
      topicList: data,
      loading: false
    }
  }
}, {
  topicList: [],
  isLoading: false,
  topicTypes: [],
  hasMore: true,
  rowIds: [],
  total: 0,
  loading: false
})
