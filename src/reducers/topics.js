import { handleActions } from 'redux-actions'

export const topic = handleActions({
  'fetch topic list request': (state, payload) => {
    console.log('topic request')
    return Object.assign({}, state, {
      loading: true
    })
  },
  'fetch topic list failure': (state, payload) => {
    console.log(payload, 'reducer')
    return state
  },
  'fetch topic list success': (state, { payload }) => {
    return Object.assign({}, state, {
      list: payload,
      loading: false
    })
  }
}, {
  list: [],
  loading: false
})
