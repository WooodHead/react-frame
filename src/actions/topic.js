/**
 * topic actions
 */
import { createAction } from 'redux-actions'
import { getTopicAllType, getTopicList } from '@/util/api'

// 获取帖子所有板块
export const fetchTopicAllType = (payload) => (dispatch) => {
  getTopicAllType().then(res => {
    if (res.result) {
      let topicTypes = res.result.data
      dispatch(createAction('fetch topic all type')({topicTypes}))
      payload.cb && payload.cb()
    }
  })
}

export const fetchTopicList = (payload) => (dispatch) => {
  var methods = ['getBbsThreadAllList', 'getBbsThreadGreatList', 'getBbsThreadHotList', 'getBbsThreadLastList']
  console.log(payload, 'payload')
  getTopicList({'method': methods[payload.methid], params: [{'id': payload.id, 'page': payload.page, 'pageNum': 3}]}).then(res => {
    if (res.result) {
      const { data } = res.result.data
      const page = payload.page
      const typeid = payload.id
      const lastPage = res.result.data['last_page']
      const refresh = payload.refresh || false
      if (lastPage >= page) {
        dispatch(createAction('fetch topic list success')({data, page, typeid, refresh}))
      }
      setTimeout(() => {
        payload.cb && payload.cb(res.result)
      }, 0)
    }
  })
}
