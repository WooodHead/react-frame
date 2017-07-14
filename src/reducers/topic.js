/**
 * topic reducer
 */
import { handleActions } from 'redux-actions'

export default handleActions({
  // 获取帖子所有的类型
  'fetch topic all type': (state, { payload }) => {
    const { topicTypes, page, total } = payload
    var topicList = {}
    var selectedTabs = []
    var currentPages = []
    for (let i in topicTypes) {
      topicList[topicTypes[i].id] = [[], [], [], []]
      selectedTabs[i] = 0
      currentPages[i] = [1, 1, 1, 1]
    }
    return {
      ...state,
      selectedNavbarIndex: 0,
      selectedTabs,
      currentPages,
      topicTypes,
      topicList
    }
  },
  'change selected navbar index': (state, { index }) => {
    return {
      ...state,
      selectedNavbarIndex: index
    }
  },
  'change home selected tabs': (state, { currentSelectedTabs }) => {
    return {
      ...state,
      selectedTabs: currentSelectedTabs
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
    const { selectedTabs, selectedNavbarIndex } = state
    const { data, total, page, lastPage, typeid, refresh } = payload
    var topicList = {...state.topicList}
    var index = selectedTabs[selectedNavbarIndex]
    if (refresh) {
      topicList[typeid][index] = data
    } else {
      topicList[typeid][index] = state.topicList[typeid][index].concat(data)
    }
    return {
      ...state,
      topicList
    }
  }
}, {
  topicList: {},
  topicTypes: [],
  selectedNavbarIndex: 0, // 当前选中的帖子类型索引
  selectedTabs: [], // 当前选中的tab [1,1,1,1,...]
  currentPages: [] // 当前板块下 所在tab的页码 [[1,1,1,1], [1,1,1,1], ...]
})
