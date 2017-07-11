/**
 * topic reducer
 */
import { handleActions } from 'redux-actions'

export default handleActions({
  // 获取帖子所有的类型
  'fetch topic all type': (state, { payload }) => {
    const { topicTypes, page, total } = payload
    var topicList = {}
    if (state.topicList.length === 0) {
      for (let i in topicTypes) {
        topicList[topicTypes[i].id] = []
      }
    } else {
      topicList = state.topicList
    }
    return {
      ...state,
      selectedTypeId: topicTypes[0].id,
      topicTypes,
      topicList,
      page,
      total
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
    const { data, total, page, lastPage, typeid } = payload
    var topicList = state.topicList
    topicList[typeid] = state.topicList[typeid].concat(data)
    return {
      ...state,
      total,
      page,
      lastPage,
      loading: false
    }
  }
}, {
  topicList: [],
  selectedTypeId: 0, // 当前选中的帖子类型id
  isLoading: false,
  topicTypes: [],
  hasMore: true,
  total: 1,
  page: 1,
  lastPage: 1,
  loading: false
})
